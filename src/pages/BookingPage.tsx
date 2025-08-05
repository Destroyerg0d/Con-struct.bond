import React from "react";
import BookingForm from "@/components/BookingForm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BookingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Schedule Your Consultation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to take your business to the next level? Book a personalized consultation 
            with our experts and discover how we can help you achieve your goals.
          </p>
        </div>
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;