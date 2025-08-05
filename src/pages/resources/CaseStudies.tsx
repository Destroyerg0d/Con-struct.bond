import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, Users, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Local Restaurant Increases Online Orders by 400%",
      client: "Bella's Italian Kitchen",
      industry: "Restaurant",
      challenge: "Low online visibility and no online ordering system",
      results: [
        { metric: "Online Orders", value: "+400%" },
        { metric: "Website Traffic", value: "+250%" },
        { metric: "Monthly Revenue", value: "+180%" }
      ],
      description: "How we transformed a traditional family restaurant into a digital success story with a modern website and integrated ordering system."
    },
    {
      title: "Fitness Studio Doubles Membership in 6 Months",
      client: "FlexFit Studio",
      industry: "Fitness",
      challenge: "Struggling to attract new members and retain existing ones",
      results: [
        { metric: "New Members", value: "+200%" },
        { metric: "Class Bookings", value: "+150%" },
        { metric: "Social Followers", value: "+300%" }
      ],
      description: "A comprehensive digital strategy that included website redesign, social media management, and lead generation campaigns."
    },
    {
      title: "E-commerce Store Achieves 5x ROI in 3 Months",
      client: "Artisan Crafts Co.",
      industry: "E-commerce",
      challenge: "Poor conversion rates and ineffective marketing spend",
      results: [
        { metric: "Conversion Rate", value: "+320%" },
        { metric: "ROI", value: "5x" },
        { metric: "Cart Value", value: "+85%" }
      ],
      description: "Optimization of the entire customer journey from discovery to purchase, resulting in dramatic improvements in performance."
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
              Success Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from real businesses. See how we've helped companies like yours achieve remarkable growth.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-surface border-border">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge variant="outline" className="mb-2">{study.industry}</Badge>
                      <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                      <CardDescription className="text-lg">{study.client}</CardDescription>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{study.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="text-3xl font-bold text-primary mb-1">{result.value}</div>
                        <div className="text-sm text-muted-foreground">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Challenge:</p>
                      <p className="text-sm">{study.challenge}</p>
                    </div>
                    <Button variant="outline">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Ready to be our next success story?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can help your business achieve similar results.
            </p>
            <Button asChild variant="cta" size="lg">
              <Link to="/book">Start Your Growth Journey</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;