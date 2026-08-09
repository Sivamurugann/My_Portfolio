import express from 'express';
import dns from 'dns/promises';
import { Resend } from 'resend';
import Contact from '../models/contacts.js';

const router = express.Router();

router.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email format.' });
  }

  const domain = email.split('@')[1];

  try {
    // 1. Native DNS Check for MX Records (This catches 90% of fake bot emails!)
    const mxRecords = await dns.resolveMx(domain);
    if (!mxRecords || mxRecords.length === 0) {
      return res.status(400).json({ error: 'The email domain cannot receive messages.' });
    }
  } catch (err) {
    return res.status(400).json({ error: 'Invalid or non-existent email domain.' });
  }

  try {
    /* 
      TEMPORARILY BYPASSED ABSTRACT API due to 401 errors.
      The DNS check above is handling our spam filtering for now!
    */

    // 2. Store sender email in MongoDB
    const newContact = new Contact({ email });
    await newContact.save();

    // 3. Send email notification via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <${process.env.MY_SENDING_DOMAIN}>`,
      to: process.env.MY_RECEIVING_EMAIL,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2>New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(500).json({ error: 'Failed to deliver message via Resend.' });
    }

    return res.status(200).json({ success: true, message: 'Message delivered successfully!' });
  } catch (error) {
    console.error('Server Execution Error:', error);
    return res.status(500).json({ error: 'An unexpected server error occurred.' });
  }
});

export default router;