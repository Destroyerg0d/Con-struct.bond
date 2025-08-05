import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Lightbulb, Rocket, Globe, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const OurStory = () => {
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
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The journey of how we became the trusted partner for small business growth
            </p>
          </div>

          <div className="space-y-8 mb-16">
            <Card className="bg-surface border-border">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Lightbulb className="w-12 h-12 text-primary" />
                  <div>
                    <CardTitle>The Beginning</CardTitle>
                    <CardDescription>2020</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  It all started with a simple observation: small businesses were struggling to compete online. 
                  We founded con-struct.bond to bridge this gap with affordable, high-quality digital solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-surface border-border">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Rocket className="w-12 h-12 text-primary" />
                  <div>
                    <CardTitle>First Success</CardTitle>
                    <CardDescription>2021</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our first client saw a 300% increase in online leads within 3 months. This success validated 
                  our approach and motivated us to help more businesses achieve similar results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-surface border-border">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Globe className="w-12 h-12 text-primary" />
                  <div>
                    <CardTitle>Growing Impact</CardTitle>
                    <CardDescription>2022-2023</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We expanded our services and refined our approach based on real client feedback. 
                  Our systematic methodology began helping businesses across various industries.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-surface border-border">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Trophy className="w-12 h-12 text-primary" />
                  <div>
                    <CardTitle>Today</CardTitle>
                    <CardDescription>2024</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We've helped hundreds of small businesses transform their digital presence and achieve 
                  sustainable growth. Our commitment to excellence continues to drive everything we do.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild variant="cta" size="lg">
              <Link to="/book">Be Part of Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;