import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock, Sparkles } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Booking = () => {
  const [date, setDate] = useState<Date>();
  const [selectedService, setSelectedService] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const services = [
    { value: "gel-manicure", label: "Gel Manicure - $45", duration: "1.5 hours" },
    { value: "acrylic-full-set", label: "Acrylic Full Set - $65", duration: "2 hours" },
    { value: "custom-nail-art", label: "Custom Nail Art - $75", duration: "2.5 hours" },
    { value: "pedicure", label: "Luxury Pedicure - $50", duration: "1 hour" },
    { value: "classic-lashes", label: "Classic Lash Extensions - $120", duration: "2 hours" },
    { value: "volume-lashes", label: "Volume Lashes - $150", duration: "2.5 hours" },
    { value: "lash-lift", label: "Lash Lift & Tint - $85", duration: "1.5 hours" },
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your booking system
    alert("Booking request submitted! We'll contact you to confirm your appointment.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-semibold text-foreground mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-muted-foreground">
            Schedule your beauty session at Daisy Blush Studio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Appointment Details
              </CardTitle>
              <CardDescription>
                Fill out the form below to book your appointment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <Label>Service *</Label>
                  <Select value={selectedService} onValueChange={setSelectedService} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          <div className="flex flex-col">
                            <span>{service.label}</span>
                            <span className="text-sm text-muted-foreground">
                              Duration: {service.duration}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Selection */}
                <div className="space-y-2">
                  <Label>Preferred Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time Selection */}
                <div className="space-y-2">
                  <Label>Preferred Time *</Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {time}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <Label htmlFor="notes">Special Requests or Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any specific preferences, allergies, or special requests?"
                    className="min-h-[100px]"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Request Appointment
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Booking Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Booking Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Studio Hours</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Monday - Friday: 9:00 AM - 7:00 PM</div>
                    <div>Saturday: 9:00 AM - 6:00 PM</div>
                    <div>Sunday: 10:00 AM - 5:00 PM</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Location</h4>
                  <p className="text-sm text-muted-foreground">
                    1547 Fulton Ave, Ste E<br />
                    Sacramento, CA 95825
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Contact</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Phone: +1 916-578-7400</div>
                    <div>Email: hello@daisyblushstudio.com</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Booking Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  • Please arrive 10 minutes before your appointment time
                </p>
                <p>
                  • 24-hour cancellation notice required to avoid fees
                </p>
                <p>
                  • A deposit may be required for certain services
                </p>
                <p>
                  • We'll send you a confirmation email within 24 hours
                </p>
                <p>
                  • For same-day appointments, please call us directly
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;