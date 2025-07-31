import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Heart, Star, CheckCircle, CreditCard } from "lucide-react";

const GiftCards = () => {
  const giftCardOptions = [
    {
      amount: 50,
      popular: false,
      description: "Perfect for a single service or add-on treatment",
      includes: ["Gel Manicure", "Lash Tint", "Express Service"],
    },
    {
      amount: 100,
      popular: true,
      description: "Great for nail art or basic lash extensions",
      includes: ["Custom Nail Art", "Classic Lash Extensions", "Premium Manicure"],
    },
    {
      amount: 150,
      popular: false,
      description: "Ideal for volume lashes or luxury nail packages",
      includes: ["Volume Lash Extensions", "Luxury Nail Package", "Full Service Experience"],
    },
    {
      amount: 200,
      popular: false,
      description: "The ultimate pampering experience",
      includes: ["Multiple Services", "Bridal Packages", "VIP Treatment"],
    },
  ];

  const occasions = [
    {
      title: "Birthday Celebrations",
      description: "Give the gift of beauty for their special day",
      icon: Gift,
    },
    {
      title: "Mother's Day",
      description: "Show mom how much she means to you",
      icon: Heart,
    },
    {
      title: "Bridal Parties",
      description: "Perfect for the bride and her squad",
      icon: Star,
    },
    {
      title: "Holidays",
      description: "A thoughtful gift for any holiday season",
      icon: Gift,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <div className="bg-primary/20 rounded-full p-4">
                  <Gift className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-semibold text-foreground mb-6">
                Gift Cards
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Give the gift of beauty and self-care. Our gift cards are perfect for birthdays, 
                holidays, or any special occasion. Let your loved ones experience the artistry 
                and luxury of Daisy Blush Studio.
              </p>
            </div>
          </div>
        </section>

        {/* Gift Card Options */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-semibold text-foreground mb-4">
                Choose Your Gift Amount
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select from our popular gift card amounts or choose a custom value
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {giftCardOptions.map((option, index) => (
                <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative ${option.popular ? 'ring-2 ring-primary' : ''}`}>
                  {option.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-3xl font-heading font-bold text-foreground">
                      ${option.amount}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Perfect for:</p>
                      {option.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      variant={option.popular ? "elegant" : "outline"} 
                      className="w-full"
                    >
                      Select ${option.amount}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Custom Amount */}
            <Card className="border-0 shadow-lg max-w-md mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-heading text-foreground">
                  Custom Amount
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Choose any amount from $25 to $500
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-medium text-foreground">$</span>
                  <input
                    type="number"
                    min="25"
                    max="500"
                    placeholder="Enter amount"
                    className="flex-1 px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  />
                </div>
                <Button variant="elegant" className="w-full">
                  <CreditCard className="w-4 h-4" />
                  Purchase Custom Gift Card
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Perfect Occasions */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-semibold text-foreground mb-4">
                Perfect for Any Occasion
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Gift cards from Daisy Blush Studio make thoughtful presents for any celebration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {occasions.map((occasion, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="bg-primary/20 rounded-full p-4 inline-flex mb-4">
                      <occasion.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                      {occasion.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {occasion.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-semibold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Purchasing and using gift cards is simple and convenient
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                  Choose Amount
                </h3>
                <p className="text-muted-foreground">
                  Select from our preset amounts or choose a custom value that fits your budget
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                  Purchase & Deliver
                </h3>
                <p className="text-muted-foreground">
                  Complete your purchase and receive the gift card digitally or pick up a physical card
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                  Book & Enjoy
                </h3>
                <p className="text-muted-foreground">
                  The recipient can book their appointment and use the gift card for any of our services
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms & FAQ */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-semibold text-foreground mb-8 text-center">
                Gift Card Terms & Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-heading text-foreground">
                      Terms & Conditions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">Gift cards never expire</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">Can be used for any service</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">Transferable to others</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">Remaining balance carried forward</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">Non-refundable but exchangeable</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-heading text-foreground">
                      Frequently Asked Questions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground text-sm mb-1">
                        How long do gift cards last?
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Our gift cards never expire, so they can be used at any time.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm mb-1">
                        Can I use multiple gift cards?
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Yes, you can combine multiple gift cards for a single appointment.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm mb-1">
                        What if my service costs less?
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Any remaining balance will be saved for your next visit.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-semibold text-foreground mb-4">
              Ready to Give the Gift of Beauty?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Purchase a gift card today and give someone special the experience of luxury beauty services 
              at Daisy Blush Studio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="elegant" size="lg">
                <Gift className="w-5 h-5" />
                Purchase Gift Card
              </Button>
              <Button variant="outline" size="lg">
                Contact Us for Bulk Orders
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GiftCards;