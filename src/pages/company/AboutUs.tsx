import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
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
              About con-struct.bond
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're passionate about helping small businesses thrive in the digital world
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-surface border-border">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Our Mission</CardTitle>
                <CardDescription>
                  To empower small businesses with modern digital tools that drive real growth and success
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-surface border-border">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Our Team</CardTitle>
                <CardDescription>
                  A dedicated team of digital experts committed to your business success
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-surface border-border">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Our Vision</CardTitle>
                <CardDescription>
                  To be the trusted partner that small businesses rely on for digital transformation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-surface border-border">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Our Values</CardTitle>
                <CardDescription>
                  Transparency, quality, innovation, and genuine care for our clients' success
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild variant="cta" size="lg">
              <Link to="/book">Work With Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;