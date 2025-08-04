"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateProjectDescription, GenerateProjectDescriptionOutput } from "@/ai/flows/generate-project-description";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Wand2, Copy, Loader2 } from "lucide-react";

const formSchema = z.object({
  keywords: z.string().min(10, {
    message: "Please enter at least 10 characters of keywords.",
  }),
});

export function AIGenerator() {
  const [generatedDescription, setGeneratedDescription] = useState<GenerateProjectDescriptionOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keywords: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedDescription(null);
    try {
      const result = await generateProjectDescription({ keywords: values.keywords });
      setGeneratedDescription(result);
    } catch (error) {
      console.error("Failed to generate description:", error);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "There was an error generating the project description. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }
  
  const handleCopy = () => {
    if (generatedDescription?.description) {
      navigator.clipboard.writeText(generatedDescription.description);
      toast({
        title: "Copied!",
        description: "Project description copied to clipboard.",
      });
    }
  };

  return (
    <section id="ai-generator" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-3">
              <Wand2 className="w-8 h-8 text-primary" />
              AI Content Assistant
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Struggling to find the right words? Enter keywords about your project, experiences, and accomplishments, and let our AI generate a compelling description for you.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="keywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Keywords</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., 'Built a full-stack e-commerce app with Next.js, Stripe, and Vercel. Increased conversion by 15%.'"
                          className="resize-none"
                          {...field}
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate Description
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md h-full min-h-[300px] flex flex-col shadow-lg">
              <CardHeader>
                <CardTitle>Generated Description</CardTitle>
                <CardDescription>Your AI-powered project description will appear here.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                {isLoading && (
                  <div className="flex items-center justify-center h-full">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  </div>
                )}
                {generatedDescription && (
                  <p className="text-sm text-foreground">{generatedDescription.description}</p>
                )}
              </CardContent>
              {generatedDescription && (
                <CardFooter>
                  <Button variant="outline" onClick={handleCopy} className="ml-auto">
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </Button>
                </CardFooter>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
