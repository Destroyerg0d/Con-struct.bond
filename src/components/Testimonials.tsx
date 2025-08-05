import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Owner, Local Bakery",
      content: "con-struct.bond transformed our online presence completely. We went from struggling to get customers to having a 6-month waiting list for our custom cakes!",
      rating: 5,
      image: "SJ"
    },
    {
      name: "Mike Chen",
      title: "Founder, Tech Startup",
      content: "The lead generation system they built for us increased our qualified leads by 300%. The ROI has been incredible, and their support is outstanding.",
      rating: 5,
      image: "MC"
    },
    {
      name: "Emily Rodriguez",
      title: "CEO, Consulting Firm",
      content: "Working with con-struct.bond was the best decision we made for our business. Their strategic approach to digital marketing helped us scale from 2 to 15 employees.",
      rating: 5,
      image: "ER"
    },
    {
      name: "David Thompson",
      title: "Owner, Fitness Studio",
      content: "Their social media management and website design helped us build a strong brand presence. We've seen a 250% increase in new member sign-ups since partnering with them.",
      rating: 5,
      image: "DT"
    },
    {
      name: "Lisa Martinez",
      title: "Founder, E-commerce Store",
      content: "The custom website they built for us is not only beautiful but also converts like crazy. Our online sales increased by 400% in just 6 months.",
      rating: 5,
      image: "LM"
    },
    {
      name: "James Wilson",
      title: "Owner, Professional Services",
      content: "con-struct.bond doesn't just deliver projects – they deliver results. Their growth strategies helped us become the go-to firm in our local market.",
      rating: 5,
      image: "JW"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4 sm:px-0">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success rounded-full px-4 py-2 mb-4 sm:mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Client Success Stories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
            Don't just take our word for it. Here's what real business owners 
            have to say about their growth journey with con-struct.bond.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-card-border rounded-xl p-5 sm:p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-cta rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-cta-foreground font-semibold text-xs sm:text-sm">
                    {testimonial.image}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm sm:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 p-6 bg-card border border-card-border rounded-xl shadow-soft">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;