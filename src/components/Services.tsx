import { Button } from "@/components/ui/button";
import { 
  Globe, 
  TrendingUp, 
  Target, 
  Share2, 
  Code, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Custom Websites",
      description: "Conversion-optimized websites that turn visitors into customers. Built with modern design principles and performance in mind.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First"],
      color: "primary"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Lead Generation",
      description: "Strategic lead generation systems that consistently bring qualified prospects to your business.",
      features: ["Landing Pages", "Lead Magnets", "Email Automation", "Analytics"],
      color: "cta"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Management",
      description: "Comprehensive social media strategies that build brand awareness and drive engagement.",
      features: ["Content Creation", "Community Management", "Social Ads", "Brand Building"],
      color: "success"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Growth Analytics",
      description: "Data-driven insights and strategies to continuously optimize your business growth.",
      features: ["Performance Tracking", "Growth Metrics", "ROI Analysis", "Strategy Planning"],
      color: "warning"
    }
  ];

  return (
    <section id="services" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4 sm:px-0">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4 sm:mb-6">
            <Code className="w-4 h-4" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent">
              Grow Your Business
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
            From strategy to execution, we provide comprehensive digital solutions 
            that help small businesses thrive in the modern marketplace.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-card-border rounded-xl p-5 sm:p-6 md:p-8 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-${service.color}/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`text-${service.color}`}>
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-foreground mb-3 sm:mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
              
              <div className="space-y-2 mb-5 sm:mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="ghost" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 text-sm sm:text-base"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card rounded-2xl p-8 md:p-12 shadow-medium border border-card-border">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our digital solutions can help you attract more clients, 
            increase conversions, and grow faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => window.location.href = '/book'}
            >
              Book Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const element = document.getElementById("about");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              See Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;