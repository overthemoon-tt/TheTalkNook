import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export const notifyBooking = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      userName: z.string().min(1),
      service: z.string().min(1),
      txid: z.string().min(1),
      ref: z.string().optional(),
    }),
  )
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Email error: RESEND_API_KEY is not set");
      return { success: false };
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails
      .send({
        from: "onboarding@resend.dev",
        to: "kt.humaira@gmail.com",
        subject: `New booking — ${data.service}`,
        html: `
        <h2>New session booked on The Talk Nook</h2>
        <p><b>Name:</b> ${escapeHtml(data.userName)}</p>
        <p><b>Service:</b> ${escapeHtml(data.service)}</p>
        <p><b>bKash TrxID:</b> ${escapeHtml(data.txid)}</p>
        <p><b>Reference:</b> ${escapeHtml(data.ref ?? "")}</p>
      `,
      })
      .catch((err: { message?: string }) => console.error("Email error:", err.message));

    return { success: true };
  });
