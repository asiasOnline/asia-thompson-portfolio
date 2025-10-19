import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const body = await req.json();
    const { firstName, lastName, email, contactMessage } = body

    try {
        const { data } = await resend.emails.send({
          from: 'asiasOnline Inquiry <general@inquiries.asiasonline.com>',
          to: 'contact@asiasonline.com',
          subject: 'New General Inquiry',
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${contactMessage}</p>
          `
        });

        return Response.json(data);
      } catch (error) {
        console.log("Resend error:", error)
        return Response.json({ error }, { status: 500 });
      }
}