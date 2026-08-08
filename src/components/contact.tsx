"use client";

import { useEffect, useRef, useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { createContact } from "@/app/actions";
import { Loader2, Mail, MapPin, Send, Check, Copy } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      type="submit" 
      disabled={pending}
      className="w-full h-11 rounded-xl text-xs sm:text-sm font-semibold shadow-md shadow-primary/20 transition-all"
    >
      {pending ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Send className="mr-2 h-3.5 w-3.5" />
      )}
      {pending ? "Transmitting Message..." : "Initiate Conversation"}
    </Button>
  );
}

const initialState: { message: string | null; errors: any } = {
  message: null,
  errors: null,
};

export function Contact() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(createContact, initialState);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (state.message?.startsWith('Success:')) {
      toast({
        title: 'Message Sent Successfully!',
        description: "Thank you for reaching out. I'll respond promptly.",
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

  const copyEmail = () => {
    navigator.clipboard.writeText("shreekanth.k000001@gmail.com");
    setCopiedEmail(true);
    toast({
      title: "Email Copied!",
      description: "shreekanth.k000001@gmail.com copied to clipboard.",
    });
    setTimeout(() => setCopiedEmail(false), 2000);
  };
  
  return (
    <section id="contact" className="w-full flex flex-col justify-center items-center py-24 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-mono font-semibold text-primary">
                Get In Touch
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-sans">
                High-Ambition Collaborations & Roles
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Whether you're looking for a Full-Stack Product Engineer for an internship, high-leverage SaaS development, or systems architecture, let's connect.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-3 text-muted-foreground bg-card/60 p-4 rounded-xl border border-border/60">
                <div className="bg-primary/10 p-2.5 rounded-lg text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-foreground uppercase tracking-wider">Location & Mode</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Bangalore, India (Available Remote Worldwide)</p>
                </div>
              </div>

              <div className="flex items-center justify-between bg-card/60 p-4 rounded-xl border border-border/60">
                <div className="flex items-center space-x-3 text-muted-foreground overflow-hidden">
                  <div className="bg-primary/10 p-2.5 rounded-lg text-primary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-semibold text-xs text-foreground uppercase tracking-wider">Direct Email</h4>
                    <p className="text-xs sm:text-sm text-foreground font-mono truncate">shreekanth.k000001@gmail.com</p>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={copyEmail}
                  className="rounded-lg text-xs font-mono text-muted-foreground hover:text-primary shrink-0 ml-2"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-card/80 backdrop-blur-md border border-border/70 p-6 md:p-8 rounded-2xl shadow-lg relative">
            <form ref={formRef} action={formAction} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your Name / Organization</Label>
                <Input id="name" name="name" placeholder="Alex / Founder" required className="h-11 bg-background/50 text-xs sm:text-sm focus-visible:ring-primary/30 rounded-xl" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="alex@company.com" required className="h-11 bg-background/50 text-xs sm:text-sm focus-visible:ring-primary/30 rounded-xl" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Scope / Inquiry</Label>
                <Textarea id="message" name="message" placeholder="Tell me about your product vision, engineering role, or technical challenge..." required className="min-h-[140px] resize-none bg-background/50 text-xs sm:text-sm focus-visible:ring-primary/30 rounded-xl" />
              </div>
              <SubmitButton />
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}