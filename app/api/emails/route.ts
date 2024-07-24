import { ReceivedEmail } from '../../../emails/received'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
    try {
        const { data, error } = await resend.emails.send({
          from: 'Acme <onboarding@resend.dev>',
          to: ['asiasatwork@gmail.com'],
          subject: 'Hello There',
          react: ReceivedEmail({ fullName: 'John Smith' }),
        });
    
        if (error) {
          return Response.json({ error }, { status: 500 });
        }
    
        return Response.json(data);
      } catch (error) {
        return Response.json({ error }, { status: 500 });
      }
}