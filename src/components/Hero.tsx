import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Users, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating Elements - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-8 h-8 bg-cta/20 rounded-full animate-bounce" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/15 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-10 w-6 h-6 bg-cta/25 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-surface border border-border rounded-full px-4 py-2 mb-8 shadow-soft">
            <Zap className="w-4 h-4 text-cta" />
            <span className="text-sm font-medium text-foreground">
              Empowering Small Businesses Since 2024
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
            Grow Your Business with{" "}
            <span className="bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent">
              Modern Digital Tools
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6 md:px-0">
            Empowering small businesses with modern digital tools to attract more clients and grow fast. 
            From custom websites to lead generation strategies, we help you build the online presence your business deserves.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button 
              variant="cta" 
              size="xl" 
              className="w-full sm:w-auto"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="w-full sm:w-auto"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Play className="w-5 h-5 mr-2" />
              View Services
            </Button>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="flex items-center justify-start sm:justify-center space-x-3 p-4 bg-card border border-card-border rounded-xl shadow-soft">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left sm:text-center">
                <div className="font-semibold text-xl md:text-2xl text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>

            <div className="flex items-center justify-start sm:justify-center space-x-3 p-4 bg-card border border-card-border rounded-xl shadow-soft">
              <div className="w-10 h-10 bg-cta/10 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-cta" />
              </div>
              <div className="text-left sm:text-center">
                <div className="font-semibold text-xl md:text-2xl text-foreground">150%</div>
                <div className="text-sm text-muted-foreground">Avg Growth</div>
              </div>
            </div>

            <div className="flex items-center justify-start sm:justify-center space-x-3 p-4 bg-card border border-card-border rounded-xl shadow-soft">
              <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-success" />
              </div>
              <div className="text-left sm:text-center">
                <div className="font-semibold text-xl md:text-2xl text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;