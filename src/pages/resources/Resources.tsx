import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Play, FileText, Video, BookOpen, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Free Guides & Templates",
      icon: <FileText className="w-8 h-8 text-primary" />,
      resources: [
        "Small Business Website Checklist",
        "Social Media Content Calendar Template", 
        "Lead Generation Playbook",
        "SEO Audit Template"
      ]
    },
    {
      title: "Video Tutorials",
      icon: <Video className="w-8 h-8 text-primary" />,
      resources: [
        "Website Design Best Practices",
        "Setting Up Google Analytics",
        "Social Media Marketing 101",
        "Email Marketing Fundamentals"
      ]
    },
    {
      title: "E-books",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      resources: [
        "The Complete Guide to Digital Marketing",
        "Building Your Brand Online",
        "Customer Acquisition Strategies",
        "Growth Hacking for Small Business"
      ]
    },
    {
      title: "Webinars & Podcasts",
      icon: <Headphones className="w-8 h-8 text-primary" />,
      resources: [
        "Monthly Growth Webinar Series",
        "Small Business Success Podcast",
        "Expert Interview Sessions",
        "Q&A with Industry Leaders"
      ]
    }
  ];

  const featuredResources = [
    {
      title: "The Ultimate Small Business Digital Marketing Guide",
      description: "A comprehensive 50-page guide covering everything from website optimization to social media strategy.",
      type: "E-book",
      downloads: "2,500+"
    },
    {
      title: "30-Day Social Media Content Calendar",
      description: "Ready-to-use content calendar with post ideas, hashtags, and engagement strategies.",
      type: "Template",
      downloads: "1,800+"
    },
    {
      title: "Website Conversion Optimization Checklist",
      description: "Step-by-step checklist to improve your website's conversion rate and generate more leads.",
      type: "Checklist",
      downloads: "3,200+"
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

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Free Business Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Downloadable guides, templates, and tools to help grow your business
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-8">Featured Resources</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => (
                <Card key={index} className="bg-surface border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-muted-foreground">{resource.type}</span>
                      <span className="text-sm text-primary font-medium">{resource.downloads} downloads</span>
                    </div>
                    <Button className="w-full" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download Free
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="bg-surface border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    {category.icon}
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.resources.map((resource, resourceIndex) => (
                      <li key={resourceIndex} className="flex items-center justify-between">
                        <span className="text-muted-foreground">{resource}</span>
                        <Button variant="ghost" size="sm">
                          {category.title === "Video Tutorials" || category.title === "Webinars & Podcasts" ? 
                            <Play className="w-4 h-4" /> : 
                            <Download className="w-4 h-4" />
                          }
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Want personalized guidance?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book a free consultation to get customized recommendations for your business.
            </p>
            <Button asChild variant="cta" size="lg">
              <Link to="/book">Book Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;