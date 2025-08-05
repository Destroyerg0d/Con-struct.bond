import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Share2, Heart, MessageCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const SocialMedia = () => {
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
              Social Media Management
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Build your brand presence and engage with your audience across all platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-surface border-border">
              <CardHeader>
                <Share2 className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Content Strategy</CardTitle>
                <CardDescription>
                  Develop compelling content that resonates with your audience
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-surface border-border">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Community Building</CardTitle>
                <CardDescription>
                  Foster authentic relationships with your followers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-surface border-border">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Engagement Management</CardTitle>
                <CardDescription>
                  Respond promptly and professionally to all interactions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-surface border-border">
              <CardHeader>
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Content Scheduling</CardTitle>
                <CardDescription>
                  Maintain consistent presence with strategic posting schedules
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild variant="cta" size="lg">
              <Link to="/book">Boost Your Social Presence</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;