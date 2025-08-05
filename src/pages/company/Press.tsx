import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, ExternalLink, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Press = () => {
  const pressReleases = [
    {
      title: "con-struct.bond Helps 500+ Small Businesses Achieve Digital Growth",
      date: "March 15, 2024",
      summary: "Company celebrates milestone of serving over 500 small businesses with comprehensive digital solutions."
    },
    {
      title: "New Analytics Platform Launched for Better Growth Insights",
      date: "February 8, 2024", 
      summary: "Advanced analytics dashboard now provides real-time insights for small business growth tracking."
    },
    {
      title: "Partnership with Leading CRM Platform Announced",
      date: "January 22, 2024",
      summary: "Strategic partnership enables seamless integration for enhanced customer relationship management."
    }
  ];

  const mediaKit = [
    { name: "Company Logo (High-res)", type: "PNG, SVG" },
    { name: "Founder Photos", type: "JPG" },
    { name: "Product Screenshots", type: "PNG" },
    { name: "Company Fact Sheet", type: "PDF" }
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
              Press & Media
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Latest news, updates, and media resources about con-struct.bond
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-8">Recent Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <Card key={index} className="bg-surface border-border">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{release.title}</CardTitle>
                        <div className="flex items-center text-muted-foreground text-sm mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          {release.date}
                        </div>
                        <CardDescription>{release.summary}</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Read More
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-8">Media Kit</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {mediaKit.map((item, index) => (
                <Card key={index} className="bg-surface border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.type}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Media Inquiries
            </h3>
            <p className="text-muted-foreground mb-6">
              For press inquiries, interviews, or additional information, please contact our media team.
            </p>
            <Button variant="cta" size="lg">
              Contact Press Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;