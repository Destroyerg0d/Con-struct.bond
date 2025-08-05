import { Button } from "@/components/ui/button";
import { Award, Users, Target, Zap, ArrowRight } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "500+", label: "Clients Served" },
    { icon: <Target className="w-6 h-6" />, value: "98%", label: "Success Rate" },
    { icon: <Award className="w-6 h-6" />, value: "50+", label: "Awards Won" },
    { icon: <Zap className="w-6 h-6" />, value: "24/7", label: "Support" }
  ];

  const values = [
    {
      title: "Client-First Approach",
      description: "Your success is our success. We prioritize understanding your unique business needs and goals."
    },
    {
      title: "Modern Technology",
      description: "We use cutting-edge tools and technologies to ensure your business stays ahead of the competition."
    },
    {
      title: "Proven Results",
      description: "Our strategies are backed by data and proven to deliver measurable growth for small businesses."
    },
    {
      title: "Ongoing Partnership",
      description: "We're not just a service provider – we're your long-term growth partner committed to your success."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4 sm:px-0">
          <div className="inline-flex items-center space-x-2 bg-cta/10 text-cta rounded-full px-4 py-2 mb-4 sm:mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">About Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Your Partner in{" "}
            <span className="bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent">
              Digital Growth
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
            We're a team of digital experts passionate about helping small businesses 
            leverage modern technology to achieve extraordinary growth.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center mb-12 sm:mb-16 px-4 sm:px-0">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 sm:mb-6">
              Empowering Small Businesses Since Day One
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              At con-struct.bond, we understand the unique challenges small businesses face in today's 
              digital landscape. That's why we've dedicated ourselves to creating solutions that are 
              not only powerful but also accessible and affordable.
            </p>
            <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Our mission is simple: to level the playing field by giving small businesses access 
              to the same digital tools and strategies that large corporations use, but tailored 
              specifically for smaller operations and budgets.
            </p>
            <Button variant="cta" size="lg" className="w-full sm:w-auto">
              Learn More About Our Story
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-card-border rounded-xl p-4 sm:p-6 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <h4 className="font-heading font-semibold text-foreground mb-2 text-sm sm:text-base">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 px-4 sm:px-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-3 sm:p-4 md:p-6 bg-gradient-card rounded-xl border border-card-border shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <div className="text-primary">
                  {stat.icon}
                </div>
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;