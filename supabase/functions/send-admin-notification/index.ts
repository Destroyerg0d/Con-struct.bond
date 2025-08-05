import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AdminNotificationRequest {
  booking: {
    id: string;
    full_name: string;
    email: string;
    service_needed: string;
    preferred_date: string;
    preferred_time: string;
    additional_notes?: string;
    created_at: string;
  };
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
    const { booking, client_name }: AdminNotificationRequest = await req.json();

    const formattedDate = formatDate(booking.preferred_date);
    const formattedTime = formatTime(booking.preferred_time);
    const bookingCreated = new Date(booking.created_at).toLocaleString();

    const emailResponse = await resend.emails.send({
      from: "Booking System <bookings@con-struct.bond>",
      to: ["admin@con-struct.bond"], // Replace with your admin email
      subject: `🔔 New Booking: ${booking.service_needed} - ${client_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #dc2626; margin-bottom: 24px;">🔔 New Booking Received</h1>
          
          <div style="background: #fef2f2; padding: 24px; border-radius: 8px; margin-bottom: 24px; border-left: 4px solid #dc2626;">
            <h2 style="margin-top: 0; color: #991b1b;">Booking Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #7f1d1d;">Booking ID:</td>
                <td style="padding: 8px 0; font-family: monospace;">${booking.id}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #7f1d1d;">Client Name:</td>
                <td style="padding: 8px 0;">${client_name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #7f1d1d;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${booking.email}" style="color: #2563eb;">${booking.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #7f1d1d;">Service:</td>
                <td style="padding: 8px 0;">${booking.service_needed}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #7f1d1d;">Date:</td>
                <td style="padding: 8px 0;">${formattedDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #7f1d1d;">Time:</td>
                <td style="padding: 8px 0;">${formattedTime}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #7f1d1d;">Booked At:</td>
                <td style="padding: 8px 0;">${bookingCreated}</td>
              </tr>
            </table>
          </div>

          ${booking.additional_notes ? `
          <div style="background: #fef3c7; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
            <h3 style="margin-top: 0; color: #92400e;">Client Notes:</h3>
            <p style="margin-bottom: 0; color: #92400e; font-style: italic;">"${booking.additional_notes}"</p>
          </div>
          ` : ''}

          <div style="background: #eff6ff; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
            <h3 style="margin-top: 0; color: #1d4ed8;">Quick Actions</h3>
            <p style="color: #1d4ed8; margin-bottom: 16px;">
              <a href="https://con-struct.bond/admin" style="background: #2563eb; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; margin-right: 8px;">View in Admin Panel</a>
              <a href="mailto:${booking.email}?subject=Re: Your ${booking.service_needed} Consultation" style="background: #059669; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px;">Reply to Client</a>
            </p>
          </div>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8;">
            <p>Con-struct Booking System</p>
            <p>Manage all bookings at <a href="https://con-struct.bond/admin" style="color: #2563eb;">con-struct.bond/admin</a></p>
          </div>
        </div>
      `,
    });

    console.log("Admin notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-admin-notification function:", error);
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