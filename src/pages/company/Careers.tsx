import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      salary: "$70k - $90k",
      description: "Join our team to build beautiful, responsive websites for small businesses."
    },
    {
      title: "Digital Marketing Specialist", 
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$60k - $80k",
      description: "Help our clients grow their online presence through strategic digital marketing."
    },
    {
      title: "Customer Success Manager",
      location: "Remote", 
      type: "Full-time",
      salary: "$65k - $85k",
      description: "Ensure our clients achieve their growth goals and maintain long-term relationships."
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

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Help us empower small businesses to thrive in the digital world
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-8">Current Openings</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="bg-surface border-border">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <CardDescription className="mt-2">{job.description}</CardDescription>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4 sm:mt-0">
                        <Badge variant="secondary">
                          <MapPin className="w-3 h-3 mr-1" />
                          {job.location}
                        </Badge>
                        <Badge variant="secondary">
                          <Clock className="w-3 h-3 mr-1" />
                          {job.type}
                        </Badge>
                        <Badge variant="secondary">
                          <DollarSign className="w-3 h-3 mr-1" />
                          {job.salary}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline">Apply Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Don't see the right fit?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals to join our mission.
            </p>
            <Button variant="cta" size="lg">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;