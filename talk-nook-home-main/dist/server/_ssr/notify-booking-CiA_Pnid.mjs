import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-Bbx4d5Fx.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/tanstack__history.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
const notifyBooking_createServerFn_handler = createServerRpc({
  id: "96c8deb2eeea00f12084f43dcfec35745451684544f42f101ff4819dfdf40117",
  name: "notifyBooking",
  filename: "src/lib/notify-booking.ts"
}, (opts) => notifyBooking.__executeServer(opts));
const notifyBooking = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  userName: stringType().min(1),
  service: stringType().min(1),
  txid: stringType().min(1),
  ref: stringType().optional()
})).handler(notifyBooking_createServerFn_handler, async ({
  data
}) => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Email error: RESEND_API_KEY is not set");
    return {
      success: false
    };
  }
  const {
    Resend
  } = await import("../_libs/resend.mjs");
  const resend = new Resend(apiKey);
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "kt.humaira@gmail.com",
    subject: `New booking — ${data.service}`,
    html: `
        <h2>New session booked on The Talk Nook</h2>
        <p><b>Name:</b> ${escapeHtml(data.userName)}</p>
        <p><b>Service:</b> ${escapeHtml(data.service)}</p>
        <p><b>bKash TrxID:</b> ${escapeHtml(data.txid)}</p>
        <p><b>Reference:</b> ${escapeHtml(data.ref ?? "")}</p>
      `
  }).catch((err) => console.error("Email error:", err.message));
  return {
    success: true
  };
});
export {
  notifyBooking_createServerFn_handler
};
