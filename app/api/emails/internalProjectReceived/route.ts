import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  interface ProjectProps {
    firstName: string;
    lastName: string;
    businessName: string;
    email: string;
    services: string[];
    dateRange: {
      from: Date;
      to: Date;
    };
    budget: number;
    contactMessage: string;
  }

    const body: ProjectProps = await req.json();
    const {
      firstName,
      lastName,
      businessName,
      email,
      services,
      dateRange,
      budget,
      contactMessage,
    } = body;

    // Validation
    if (!firstName || !lastName || !email ) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format dates
    const formatDate = (date: Date) => {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    };

    try {
        const { data } = await resend.emails.send({
          from: 'asiasOnline Business <project@inquiries.asiasonline.com>',
          to: 'contact@asiasonline.com',
          subject: 'New Project Inquiry',
          html: `
          <h2>New Project Inquiry</h2>
          
          <h3>Contact Information</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Business:</strong> ${businessName || 'N/A'}</p>
          <p><strong>Email:</strong> ${email}</p>
          
          <h3>Project Details</h3>
          <p><strong>Services Requested:</strong></p>
          <ul>
            ${services.map(service => `<li>${service}</li>`).join('')}
          </ul>
          
          <p><strong>Project Timeline:</strong> ${formatDate(dateRange.from)} - ${formatDate(dateRange.to)}</p>
          <p><strong>Budget:</strong> $${budget.toLocaleString()}</p>
          
          <h3>Message</h3>
          <p>${contactMessage.replace(/\n/g, '<br>')}</p>
        `,
        });

        return NextResponse.json({
          message: 'Project inquiry sent successfully',
        });
      } catch (error) {
        console.log("Resend error:", error)
        return NextResponse.json({ error }, { status: 500 });
      }
}