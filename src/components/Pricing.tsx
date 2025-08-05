import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      icon: <Zap className="w-6 h-6" />,
      price: "$997",
      period: "/month",
      description: "Perfect for small businesses just starting their digital journey",
      features: [
        "Custom responsive website",
        "Basic SEO optimization",
        "Contact form integration",
        "1 month of support",
        "Mobile-friendly design",
        "Basic analytics setup"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Growth",
      icon: <Star className="w-6 h-6" />,
      price: "$1,997",
      period: "/month",
      description: "Ideal for businesses ready to scale with comprehensive digital solutions",
      features: [
        "Everything in Starter",
        "Lead generation system",
        "Social media management",
        "Email marketing automation",
        "Advanced SEO & content",
        "Monthly strategy calls",
        "Performance reporting",
        "3 months of support"
      ],
      popular: true,
      cta: "Start Growing"
    },
    {
      name: "Enterprise",
      icon: <Crown className="w-6 h-6" />,
      price: "Custom",
      period: "",
      description: "Tailored solutions for established businesses with specific needs",
      features: [
        "Everything in Growth",
        "Custom integrations",
        "Advanced automation",
        "Dedicated account manager",
        "Priority support",
        "Custom reporting",
        "Team training",
        "Ongoing optimization"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4 sm:px-0">
          <div className="inline-flex items-center space-x-2 bg-cta/10 text-cta rounded-full px-4 py-2 mb-4 sm:mb-6">
            <Crown className="w-4 h-4" />
            <span className="text-sm font-medium">Pricing Plans</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent">
              Growth Plan
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
            Transparent pricing with no hidden fees. Every plan includes everything 
            you need to start growing your business immediately.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border rounded-2xl p-5 sm:p-6 md:p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? "border-cta ring-2 ring-cta/20 md:scale-105" 
                  : "border-card-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-cta text-cta-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-12 h-12 ${plan.popular ? 'bg-cta/10' : 'bg-primary/10'} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <div className={plan.popular ? 'text-cta' : 'text-primary'}>
                    {plan.icon}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl md:text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                variant={plan.popular ? "cta" : "outline"} 
                size="lg" 
                className="w-full"
                onClick={() => {
                  if (plan.name === "Enterprise") {
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  } else {
                    window.location.href = '/book';
                  }
                }}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center bg-gradient-card rounded-2xl p-8 border border-card-border shadow-medium">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-success" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            30-Day Money-Back Guarantee
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're so confident in our ability to help your business grow that we offer a 
            complete money-back guarantee. If you're not satisfied with the results 
            within 30 days, we'll refund every penny.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;