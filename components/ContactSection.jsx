"use client";

import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { contactSchema } from "@/lib/validation/contactSchema";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);

    const rawData = {
      name: (formData.get("name") || "").toString(),
      email: (formData.get("email") || "").toString(),
      message: (formData.get("message") || "").toString(),
    };

    const result = contactSchema.safeParse(rawData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors);
      toast({
        variant: "destructive",
        title: "Please fix the highlighted fields.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);

        if (res.status === 400 && payload?.errors) {
          setErrors(payload.errors);
          toast({
            variant: "destructive",
            title: "Please fix the highlighted fields.",
          });
        } else {
          toast({
            variant: "destructive",
            title: "Something went wrong.",
            description: "Please try again later.",
          });
        }

        return;
      }

      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      form.reset();
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Network error.",
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Looking for new opportunities or interested in collaborating? Feel free to reach out - I'd be happy to connect and explore ideas together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start spece-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-center mr-5"> Email</h4>
                  <a
                    href="mailto:eladg3@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors ml-2"
                  >
                    eladg3@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start spece-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-center"> Phone</h4>
                  <a
                    href="tel:+972525393608"
                    className="text-muted-foreground hover:text-primary transition-colors ml-1"
                  >
                    +972 525393608
                  </a>
                </div>
              </div>

              <div className="flex items-start spece-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium ml-8">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors ml-10">
                    Israel
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/elad-gelerenter/" target="_blank">
                  <Linkedin />
                </a>

                <a href="#" target="_blank">
                  <Instagram />
                </a>

                <a href="https://www.facebook.com/elad.gelerenter/" target="_blank">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary",
                    errors.name && "border-destructive"
                  )}
                  placeholder="Enter your name..."
                />
                {errors.name && (
                  <p className="mt-1 text-xs font-semibold text-red-400">{errors.name[0]}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary",
                    errors.email && "border-destructive"
                  )}
                  placeholder="john@gmail.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs font-semibold text-red-400">{errors.email[0]}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none",
                    errors.message && "border-destructive"
                  )}
                  placeholder="Hello, I'd like to talk about..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs font-semibold text-red-400">{errors.message[0]}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
