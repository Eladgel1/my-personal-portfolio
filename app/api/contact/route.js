import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, sanitizeContactInput } from "@/lib/validation/contactSchema";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_TARGET_EMAIL;

export async function POST(request) {
  if (!CONTACT_EMAIL || !process.env.RESEND_API_KEY) {
    console.error("Missing CONTACT_TARGET_EMAIL or RESEND_API_KEY env vars");
    return NextResponse.json(
      {
        ok: false,
        error: "Server email configuration error.",
      },
      { status: 500 }
    );
  }

  try {
    const body = await request.json().catch(() => ({}));

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          ok: false,
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = sanitizeContactInput(result.data);

    // Build the email content
    const subject = `New message from ${data.name}`;
    const text = [
      `You have received a new message from your portfolio contact form:`,
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      "",
      "Message:",
      data.message,
    ].join("\n");

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      replyTo: data.email,
      subject,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          ok: false,
          error: "Failed to send email.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}