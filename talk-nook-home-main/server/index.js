require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend('re_6rUsmzEr_NvsSvviRbEr6TyzUzt1yqvni');

app.post('/api/notify-booking', async (req, res) => {
    const { userName, service, txid, ref } = req.body;
    console.log('Received:', { userName, service, txid, ref });
    try {
      const result = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'kt.humaira@gmail.com',
        subject: `New booking — ${service}`,
        html: `
          <h2>New session booked on The Talk Nook</h2>
          <p><b>Name:</b> ${userName}</p>
          <p><b>Service:</b> ${service}</p>
          <p><b>bKash TrxID:</b> ${txid}</p>
          <p><b>Reference:</b> ${ref}</p>
        `,
      });
      console.log('Resend result:', result);
      res.json({ success: true });
    } catch (err) {
      console.error('Email error:', err.message);
      res.status(500).json({ success: false });
    }
  });

  app.listen(process.env.PORT || 4000, () => console.log('Server running on port', process.env.PORT || 4000));