import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail, Calendar, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-foreground mb-6">
                Contact & Booking
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ready to enhance your beauty? Book your appointment or get in touch with us. 
                We're here to answer your questions and help you achieve your perfect look.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-heading font-semibold text-foreground mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    We'd love to hear from you! Whether you're ready to book an appointment 
                    or have questions about our services, we're here to help.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/20 rounded-full p-3">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground mb-2">Visit Our Studio</h3>
                          <p className="text-muted-foreground">
                            1547 Fulton Ave, Ste E<br />
                            Sacramento, CA 95825
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/20 rounded-full p-3">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground mb-2">Call Us</h3>
                          <p className="text-muted-foreground">
                            <a href="tel:+19165787400" className="hover:text-primary transition-colors">
                              +1 916-578-7400
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/20 rounded-full p-3">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground mb-2">Email Us</h3>
                          <p className="text-muted-foreground">
                            <a href="mailto:hello@daisyblushstudio.com" className="hover:text-primary transition-colors">
                              hello@daisyblushstudio.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/20 rounded-full p-3">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground mb-2">Studio Hours</h3>
                          <div className="text-muted-foreground space-y-1">
                            <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                            <p>Sunday: Closed</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Booking & Contact Form */}
              <div className="space-y-8">
                {/* Online Booking */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-foreground">
                      <Calendar className="w-6 h-6 text-primary" />
                      <span>Book Your Appointment</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">
                      Ready to schedule your visit? Use our online booking system to select your 
                      preferred date, time, and services.
                    </p>
                    <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-border/50">
                      <p className="text-center text-muted-foreground mb-4">
                        Online booking system integration would be placed here
                      </p>
                      <div className="text-center space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Powered by [Vagaro/Square/Acuity Scheduling]
                        </p>
                        <Button variant="elegant" size="lg" className="w-full">
                          <Calendar className="w-5 h-5" />
                          Open Booking System
                        </Button>
                      </div>
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                      For same-day appointments, please call us directly at 
                      <a href="tel:+19165787400" className="text-primary hover:underline ml-1">
                        916-578-7400
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Form */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-foreground">
                      <MessageCircle className="w-6 h-6 text-primary" />
                      <span>Send Us a Message</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            First Name
                          </label>
                          <Input placeholder="Your first name" />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">
                            Last Name
                          </label>
                          <Input placeholder="Your last name" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Email
                        </label>
                        <Input type="email" placeholder="your.email@example.com" />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Phone Number
                        </label>
                        <Input type="tel" placeholder="(916) 578-7400" />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Service Interest
                        </label>
                        <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                          <option>Select a service</option>
                          <option>Nail Services</option>
                          <option>Lash Extensions</option>
                          <option>Both Nail & Lash</option>
                          <option>Gift Card</option>
                          <option>General Inquiry</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Message
                        </label>
                        <Textarea 
                          placeholder="Tell us about your desired services, preferred dates, or any questions you have..."
                          rows={4}
                        />
                      </div>
                      
                      <Button variant="elegant" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-heading font-semibold text-foreground mb-8 text-center">
                Find Our Studio
              </h2>
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="h-96 bg-muted/50 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-lg font-medium text-foreground">Google Maps Integration</p>
                    <p className="text-muted-foreground">1547 Fulton Ave, Ste E, Sacramento, CA 95825</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;