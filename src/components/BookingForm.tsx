import React, { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { CalendarIcon, Clock } from "lucide-react";

type ServiceType = "Website" | "Marketing" | "Lead Gen" | "Social Media";

interface TimeSlot {
  time_slot: string;
}

const BookingForm: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState<ServiceType>();
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { toast } = useToast();

  // Fetch available slots when date changes
  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(selectedDate);
    }
  }, [selectedDate]);

  const fetchAvailableSlots = async (date: Date) => {
    try {
      const { data, error } = await (supabase as any).rpc('get_available_slots', {
        target_date: format(date, 'yyyy-MM-dd')
      });

      if (error) throw error;
      setAvailableSlots(data || []);
      setSelectedTime(""); // Reset selected time when date changes
    } catch (error) {
      console.error('Error fetching available slots:', error);
      toast({
        title: "Error",
        description: "Failed to load available time slots",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !fullName || !email || !service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      console.log('Creating booking with data:', {
        full_name: fullName,
        email: email,
        service_needed: service,
        preferred_date: format(selectedDate, 'yyyy-MM-dd'),
        preferred_time: selectedTime,
        additional_notes: notes || null,
        status: 'pending'
      });

      const { data, error } = await supabase
        .from('bookings')
        .insert({
          full_name: fullName,
          email: email,
          service_needed: service,
          preferred_date: format(selectedDate, 'yyyy-MM-dd'),
          preferred_time: selectedTime,
          additional_notes: notes || null,
          status: 'pending'
        })
        .select()
        .single();

      if (error) {
        console.error('Database error:', error);
        throw error;
      }

      console.log('Booking created successfully:', data);

      // Send confirmation email
      try {
        const confirmationResponse = await supabase.functions.invoke('send-booking-confirmation', {
          body: {
            booking: data,
            to_email: email,
            client_name: fullName
          }
        });
        console.log('Confirmation email response:', confirmationResponse);
      } catch (emailError) {
        console.error('Error sending confirmation email:', emailError);
        // Don't throw - booking was created successfully
      }

      // Send admin notification
      try {
        const adminResponse = await supabase.functions.invoke('send-admin-notification', {
          body: {
            booking: data,
            client_name: fullName
          }
        });
        console.log('Admin notification response:', adminResponse);
      } catch (adminError) {
        console.error('Error sending admin notification:', adminError);
        // Don't throw - booking was created successfully
      }

      setIsConfirmed(true);
      toast({
        title: "Call Booked Successfully!",
        description: "You'll receive a confirmation email shortly.",
      });
    } catch (error) {
      console.error('Error creating booking:', error);
      toast({
        title: "Booking Failed",
        description: "There was an error processing your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  if (isConfirmed) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="text-center py-12">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-4 text-primary">Call Booked!</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Thank you for booking a call with us. You'll receive a confirmation email with all the details and a calendar invite.
          </p>
          <Button onClick={() => window.location.reload()} variant="outline">
            Book Another Call
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarIcon className="w-6 h-6" />
          Schedule a Call
        </CardTitle>
        <CardDescription>
          Book a consultation call with our team. Choose your preferred date and time.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          {/* Service Selection */}
          <div className="space-y-2">
            <Label>Service Needed *</Label>
            <Select value={service} onValueChange={(value: ServiceType) => setService(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Website">Website Development</SelectItem>
                <SelectItem value="Marketing">Marketing Services</SelectItem>
                <SelectItem value="Lead Gen">Lead Generation</SelectItem>
                <SelectItem value="Social Media">Social Media Management</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date Selection */}
          <div className="space-y-2">
            <Label>Preferred Date *</Label>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
              className="rounded-md border"
            />
          </div>

          {/* Time Selection */}
          {selectedDate && (
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Preferred Time *
              </Label>
              {availableSlots.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {availableSlots.map((slot) => (
                    <Button
                      key={slot.time_slot}
                      type="button"
                      variant={selectedTime === slot.time_slot ? "default" : "outline"}
                      className="h-10"
                      onClick={() => setSelectedTime(slot.time_slot)}
                    >
                      {formatTime(slot.time_slot)}
                    </Button>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No available slots for this date.</p>
              )}
            </div>
          )}

          {/* Additional Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any specific requirements or questions?"
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full" 
            disabled={loading || !selectedDate || !selectedTime}
            size="lg"
          >
            {loading ? "Booking..." : "Book Call"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
