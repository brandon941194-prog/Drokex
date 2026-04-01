import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nombre, email, motivo, mensaje } = await req.json();

    console.log("Datos recibidos:", { nombre, email, motivo, mensaje });

    const data = await resend.emails.send({
      from: "Drokex <onboarding@resend.dev>",
      to: ["brandon941194@gmail.com"],
      subject: `Nuevo contacto: ${motivo}`,
      html: `
        <h2>Nuevo mensaje desde Drokex</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Motivo:</strong> ${motivo}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    console.log("Respuesta Resend:", data);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}