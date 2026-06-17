import { createAPIFileRoute } from "@tanstack/react-start/api";

export const APIRoute = createAPIFileRoute("/api/notify-booking")({
  POST: async ({ request }) => {
    const { userName, service, txid, ref } = await request.json();
    
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kt.humaira@gmail.com",
      subject: `New booking — ${service}`,
      html: `
        <h2>New session booked on The Talk Nook</h2>
        <p><b>Name:</b> ${userName}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>bKash TrxID:</b> ${txid}</p>
        <p><b>Reference:</b> ${ref}</p>
      `,
    }).catch(err => console.error("Email error:", err.message));

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" }
    });
  },
});