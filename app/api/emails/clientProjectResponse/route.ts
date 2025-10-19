import { ProjectRequest } from '../../../../emails/Client-ProjectResponse'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const body = await req.json();
    const { firstName, lastName, email, contactMessage } = body

    try {
        const { data } = await resend.emails.send({
          from: 'Asia Thompson <project@inquiries.asiasonline.com>',
          to: [email],
          subject: 'Project Request Received!',
          react: ProjectRequest({ firstName: firstName }),
        });

        return Response.json(data);
      } catch (error) {
        console.log("Resend error:", error)
        return Response.json({ error }, { status: 500 });
      }
}