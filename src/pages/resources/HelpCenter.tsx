import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        {
          question: "How do I get started with con-struct.bond?",
          answer: "Simply book a free consultation through our booking page. We'll discuss your needs and create a customized plan for your business."
        },
        {
          question: "What information do I need to provide?",
          answer: "We'll need basic information about your business, your goals, current website (if any), and target audience."
        },
        {
          question: "How long does a typical project take?",
          answer: "Project timelines vary based on scope. A basic website typically takes 2-3 weeks, while comprehensive digital marketing campaigns can take 4-6 weeks to launch."
        }
      ]
    },
    {
      title: "Services & Pricing",
      questions: [
        {
          question: "What services do you offer?",
          answer: "We offer custom website development, lead generation, social media management, and growth analytics to help small businesses grow online."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer flexible payment plans to make our services accessible to small businesses. Contact us to discuss options."
        },
        {
          question: "Can I cancel or modify my service plan?",
          answer: "You can modify or cancel your plan with 30 days notice. We'll work with you to ensure a smooth transition."
        }
      ]
    },
    {
      title: "Technical Support",
      questions: [
        {
          question: "Do you provide ongoing support after project completion?",
          answer: "Yes, we offer various support packages including maintenance, updates, and technical assistance."
        },
        {
          question: "How do I access my website dashboard?",
          answer: "We'll provide you with login credentials and a tutorial on how to access and use your website dashboard."
        },
        {
          question: "What if my website goes down?",
          answer: "We monitor all websites 24/7 and will address any issues immediately. You'll also receive notifications if any problems occur."
        }
      ]
    }
  ];

  const contactOptions = [
    {
      title: "Live Chat",
      description: "Get instant answers to your questions",
      icon: <MessageCircle className="w-6 h-6" />,
      action: "Start Chat",
      available: "24/7"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our team",
      icon: <Phone className="w-6 h-6" />,
      action: "Call Now",
      available: "Mon-Fri 9AM-6PM PST"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: <Mail className="w-6 h-6" />,
      action: "Send Email",
      available: "Response within 2 hours"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Help Center
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Find answers to common questions or get in touch with our support team
            </p>
            
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-border"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactOptions.map((option, index) => (
              <Card key={index} className="bg-surface border-border text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {option.icon}
                  </div>
                  <CardTitle>{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{option.available}</p>
                  <Button variant="outline" className="w-full">{option.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-heading font-semibold text-foreground text-center">
              Frequently Asked Questions
            </h2>
            
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <Card key={faqIndex} className="bg-surface border-border">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-start">
                          <HelpCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          {faq.question}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground ml-7">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Still need help?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you succeed. Don't hesitate to reach out.
            </p>
            <Button variant="cta" size="lg">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;