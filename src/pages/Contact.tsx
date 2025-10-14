import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xpznqkgj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          _subject: `Portfolio Contact - ${formData.name}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly at joshuaonyeka2020@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-16 md:pb-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
              Ready to transform your ideas into reality? Get in touch with me and let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground mb-6">I'm here to answer your questions and discuss how I can help bring your project to life.</p>
              </div>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">joshuaonyeka2020@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Availability</h3>
                    <p className="text-muted-foreground">Open for projects</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Remote/ Hybrid
                      <br />
                      Available worldwide
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-5 md:p-8 bg-card border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Your Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company / Organization</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Project Details *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, goals, and timeline..."
                      required
                      rows={8}
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-border group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              "The best time to start was yesterday. The next best time is <span className="text-gradient">now.</span>"
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">Let's turn your vision into reality. I'm ready when you are.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
