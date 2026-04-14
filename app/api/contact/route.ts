import { NextResponse } from "next/server";

import { sendContactEmail } from "@/lib/mail";
import { contactSchema } from "@/lib/validators";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    const isSpamAttempt = parsed.error.issues.some(
      (issue) => issue.path[0] === "website",
    );

    if (isSpamAttempt) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      { ok: false, error: "Invalid form submission." },
      { status: 400 },
    );
  }

  try {
    await sendContactEmail(parsed.data);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Unable to send contact email", error);

    return NextResponse.json(
      { ok: false, error: "Unable to send message at the moment." },
      { status: 500 },
    );
  }
}
