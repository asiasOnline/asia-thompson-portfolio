import  Received from '@/emails/Received'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const body = await req.json();
    console.log("Email Body:", body)
    const { firstName, lastName, email, contactMessage } = body

    try {
        const { data } = await resend.emails.send({
          from: 'Asia Thompson <hello@contact.asiathompson.dev>',
          to: [email],
          subject: 'Thanks For Reaching Out!',
          react: Received({ firstName: firstName }),
        });

        return Response.json(data);
      } catch (error) {
        console.log("Resend error:", error)
        return Response.json({ error }, { status: 500 });
      }
}