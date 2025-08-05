import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Essential Website Features Every Small Business Needs",
      excerpt: "Discover the must-have features that can transform your website into a powerful business tool.",
      category: "Web Development",
      readTime: "5 min read",
      date: "March 20, 2024"
    },
    {
      title: "How to Generate More Leads with Social Media Marketing",
      excerpt: "Learn proven strategies to turn your social media presence into a lead generation machine.",
      category: "Marketing",
      readTime: "7 min read", 
      date: "March 18, 2024"
    },
    {
      title: "The Ultimate Guide to Local SEO for Small Businesses",
      excerpt: "Boost your local visibility and attract more customers with these SEO best practices.",
      category: "SEO",
      readTime: "10 min read",
      date: "March 15, 2024"
    },
    {
      title: "Analytics That Matter: Key Metrics for Business Growth",
      excerpt: "Focus on the metrics that actually drive business growth and learn how to track them effectively.",
      category: "Analytics",
      readTime: "6 min read",
      date: "March 12, 2024"
    },
    {
      title: "Building Trust: Why Customer Testimonials Are Essential",
      excerpt: "Discover how to collect and leverage customer testimonials to build credibility and trust.",
      category: "Marketing",
      readTime: "4 min read",
      date: "March 10, 2024"
    },
    {
      title: "Mobile-First Design: Why It's Critical for Your Business",
      excerpt: "Understand why mobile-first design is no longer optional and how to implement it effectively.",
      category: "Design",
      readTime: "8 min read",
      date: "March 8, 2024"
    }
  ];

  const categories = ["All", "Web Development", "Marketing", "SEO", "Analytics", "Design"];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Business Growth Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and strategies to help your small business thrive online
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category, index) => (
              <Badge 
                key={index}
                variant={index === 0 ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-surface border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;