import { json } from "@tanstack/react-start";
import { createAPIFileRoute } from "@tanstack/start/api";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const Route = createAPIFileRoute("/api/notify")({
  POST: async ({ request }) => {
    const { userName, service, txid, ref } = await request.json();
    
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.ADMIN_EMAIL!,
      subject: `New booking — ${service}`,
      html: `
        <h2>New session booked on The Talk Nook</h2>
        <p><b>Name:</b> ${userName}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>bKash TrxID:</b> ${txid}</p>
        <p><b>Reference:</b> ${ref}</p>
      `,
    }).catch(err => console.error("Email error:", err.message));

    return json({ success: true });
  },
});