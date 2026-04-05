"use client";

import { useEffect, useRef, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { createContact } from "@/app/actions";
import { Loader2, Mail, MapPin, Send } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full h-12 rounded-full text-base font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300" disabled={pending}>
      {pending ? (
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
      ) : (
        <Send className="mr-2 h-4 w-4" />
      )}
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

const initialState = {
  message: null,
  errors: null,
};

export function Contact() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(createContact, initialState);

  useEffect(() => {
    if (state.message?.startsWith('Success:')) {
      toast({
        title: 'Message Sent Successfully!',
        description: "Thank you for reaching out. I'll get back to you shortly.",
      });
      formRef.current?.reset();
    } else if (state.message?.startsWith('Error:') || state.message?.startsWith('Database Error:')) {
      toast({
        variant: 'destructive',
        title: "Submission Failed",
        description: state.message,
      });
    }
  }, [state, toast]);
  
  return (
    <section id="contact" className="w-full flex flex-col justify-center items-center py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                Let's Connect
              </div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Ready to build something together?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                Whether you have a web development internship opportunity, a freelance project, or just want to talk code, I'm always open to discussing new ideas.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Location</h4>
                  <p>Bangalore, India (Open to Remote)</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <p>shreekanth000001@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-background/60 backdrop-blur-md border border-border/50 p-8 md:p-10 rounded-3xl shadow-xl relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10" />
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                <Input id="name" name="name" placeholder="Shree" className="h-12 bg-background/50 focus-visible:ring-primary/30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="shree@company.com" className="h-12 bg-background/50 focus-visible:ring-primary/30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">Your Message</Label>
                <Textarea id="message" name="message" placeholder="Tell me about your project, team, or internship role..." className="min-h-[150px] resize-none bg-background/50 focus-visible:ring-primary/30" />
              </div>
              <SubmitButton />
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}