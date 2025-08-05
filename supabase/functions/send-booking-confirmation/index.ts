import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookingConfirmationRequest {
  booking: {
    id: string;
    full_name: string;
    email: string;
    service_needed: string;
    preferred_date: string;
    preferred_time: string;
    additional_notes?: string;
  };
  to_email: string;
  client_name: string;
}

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

const formatTime = (timeStr: string) => {
  const [hours, minutes] = timeStr.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { booking, to_email, client_name }: BookingConfirmationRequest = await req.json();

    const formattedDate = formatDate(booking.preferred_date);
    const formattedTime = formatTime(booking.preferred_time);

    // Create calendar event content
    const startDateTime = new Date(`${booking.preferred_date}T${booking.preferred_time}`);
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // 1 hour duration

    const calendarEvent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Con-struct//Booking System//EN
BEGIN:VEVENT
UID:${booking.id}@con-struct.bond
DTSTART:${startDateTime.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTEND:${endDateTime.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:${booking.service_needed} Consultation - ${client_name}
DESCRIPTION:Service: ${booking.service_needed}\\nClient: ${client_name}\\nEmail: ${booking.email}${booking.additional_notes ? `\\nNotes: ${booking.additional_notes}` : ''}
LOCATION:Video Call (details to be provided)
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const emailResponse = await resend.emails.send({
      from: "Con-struct <bookings@con-struct.bond>",
      to: [to_email],
      subject: `Call Confirmed: ${booking.service_needed} Consultation`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb; margin-bottom: 24px;">Your Call is Confirmed!</h1>
          
          <div style="background: #f8fafc; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
            <h2 style="margin-top: 0; color: #334155;">Booking Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Service:</td>
                <td style="padding: 8px 0;">${booking.service_needed}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Date:</td>
                <td style="padding: 8px 0;">${formattedDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Time:</td>
                <td style="padding: 8px 0;">${formattedTime}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Duration:</td>
                <td style="padding: 8px 0;">1 hour</td>
              </tr>
            </table>
          </div>

          ${booking.additional_notes ? `
          <div style="background: #fef3c7; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
            <h3 style="margin-top: 0; color: #92400e;">Your Notes:</h3>
            <p style="margin-bottom: 0; color: #92400e;">${booking.additional_notes}</p>
          </div>
          ` : ''}

          <div style="background: #ecfdf5; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
            <h3 style="margin-top: 0; color: #059669;">What's Next?</h3>
            <ul style="color: #059669; margin-bottom: 0;">
              <li>Add this event to your calendar using the attached invite</li>
              <li>We'll send you a reminder 1 hour before the call</li>
              <li>Meeting details will be provided 24 hours before the call</li>
            </ul>
          </div>

          <p style="color: #64748b;">
            If you need to reschedule or cancel, please reply to this email or contact us at 
            <a href="mailto:bookings@con-struct.bond" style="color: #2563eb;">bookings@con-struct.bond</a>
          </p>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8;">
            <p>Con-struct - Building Your Digital Future</p>
            <p><a href="https://con-struct.bond" style="color: #2563eb;">con-struct.bond</a></p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: 'meeting-invite.ics',
          content: Buffer.from(calendarEvent).toString('base64'),
          type: 'text/calendar',
        },
      ],
    });

    console.log("Booking confirmation email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-booking-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);