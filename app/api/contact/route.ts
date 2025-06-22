export const runtime = "nodejs";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response("Missing fields", { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["shubhamspatilnbr@gmail.com"],
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; font-size: 14px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    console.log("Resend email response:", data);

    return new Response("Message sent successfully", { status: 200 });
  } catch (error) {
    console.error("Resend error:", error);
    return new Response("Failed to send message", { status: 500 });
  }
}
