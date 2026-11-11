import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import SEO from "@/components/SEO";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS credentials from environment variables
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_SERVICE;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        to_email: "joshuaonyeka2020@gmail.com",
        from_name: formData.name,
        reply_to: formData.email,
        subject: `Portfolio Contact - ${formData.name}`,
      });

      if (response.status === 200) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
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
      <SEO
        title="Contact | Joshua Onyeka - Software Engineer"
        description="Get in touch with Joshua Onyeka to start building your next amazing digital project."
        keywords={["contact", "hire software engineer", "freelance developer", "web development project", "joshua onyeka contact", "tech consulting"]}
        image="https://joshwebfolio.vercel.app/og-image-contact.jpg"
        url="https://joshwebfolio.vercel.app/contact"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-16 md:pb-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.22em] text-primary">Let’s talk</span>
            <h1 className="mb-6 animate-fade-in-up">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h1>
            <p className="text-base text-muted-foreground animate-fade-in md:text-xl" style={{ animationDelay: "200ms" }}>
              Ready to transform your ideas into reality? Get in touch with me and let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-3">
            <div className="space-y-8">
              <div>
                <h2 className="mb-4">Get in Touch</h2>
                <p className="mb-6 text-muted-foreground">I'm here to answer your questions and discuss how I can help bring your project to life.</p>
              </div>

              <Card className="border-border/60 bg-card/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-primary/80">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/15">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">joshuaonyeka2020@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="border-border/60 bg-card/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-primary/80">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/15">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Availability</h3>
                    <p className="text-muted-foreground">Open for projects</p>
                  </div>
                </div>
              </Card>

              <Card className="border-border/60 bg-card/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:border-primary/80">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/15">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">
                      Remote / Hybrid
                      <br />
                      Available worldwide
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card className="border border-border/60 bg-card/80 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.12)] md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Your Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="border-border bg-background/60"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="border-border bg-background/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Company / Organization</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="border-border bg-background/60"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Project Details *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, goals, and timeline..."
                      required
                      rows={8}
                      className="resize-none border-border bg-background/60"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-border group" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              "The best time to start was yesterday. The next best time is <span className="text-gradient">now.</span>"
            </h2>
            <p className="text-base text-muted-foreground md:text-xl">Let's turn your vision into reality. I'm ready when you are.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
