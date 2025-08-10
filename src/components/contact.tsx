"use client";

import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { createContact } from "@/app/actions";
import { Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Send Message
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
  const [state, formAction] = useFormState(createContact, initialState);

  useEffect(() => {
    if (state.message?.startsWith('Success:')) {
      toast({
        title: 'Message Sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
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
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or just want to say hello? Fill out the form, and I'll get back to you as soon as possible.
            </p>
          </div>
          <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-secondary/50">
              <form ref={formRef} action={formAction} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell me about your project or inquiry..." />
                </div>
                <SubmitButton />
              </form>
          </div>
        </div>
      </div>
    </section>
  );
}
