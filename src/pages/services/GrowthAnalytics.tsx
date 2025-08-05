import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BarChart3, PieChart, TrendingUp, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const GrowthAnalytics = () => {
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
              Growth Analytics
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Make data-driven decisions with comprehensive analytics and insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-surface border-border">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Performance Tracking</CardTitle>
                <CardDescription>
                  Monitor key metrics that matter to your business growth
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-surface border-border">
              <CardHeader>
                <PieChart className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Custom Dashboards</CardTitle>
                <CardDescription>
                  Visualize your data with intuitive, customizable dashboards
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-surface border-border">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Growth Insights</CardTitle>
                <CardDescription>
                  Identify opportunities and optimize your growth strategy
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-surface border-border">
              <CardHeader>
                <Eye className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Real-time Monitoring</CardTitle>
                <CardDescription>
                  Stay informed with real-time data and automated reports
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild variant="cta" size="lg">
              <Link to="/book">Get Analytics Setup</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthAnalytics;