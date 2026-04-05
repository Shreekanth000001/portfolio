"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateDescriptionAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Copy, Loader2, Bot } from "lucide-react";

const formSchema = z.object({
  keywords: z.string().min(10, {
    message: "Please enter at least 10 characters of keywords.",
  }),
});

interface GenerationOutput {
    description: string;
}

export function AIGenerator() {
  const [generatedDescription, setGeneratedDescription] = useState<GenerationOutput | null>(null);
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
      const result = await generateDescriptionAction(values.keywords);
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
        title: "Copied to Clipboard!",
        description: "You can now paste this description into your documents.",
      });
    }
  };

  return (
    <section id="ai-generator" className="w-full flex flex-col justify-center items-center py-24 md:py-32 bg-secondary/10 border-y border-border/50 relative">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-500 backdrop-blur-sm">
              <Sparkles className="mr-2 h-4 w-4" />
              Experimental Feature
            </div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              AI Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary">Assistant</span>
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
              Writing project documentation can be tedious. Feed my AI assistant a few raw keywords about your tech stack and achievements, and it will generate a professional project summary instantly.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 bg-background/50 p-6 rounded-2xl border border-border/50 backdrop-blur-sm">
                <FormField
                  control={form.control}
                  name="keywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Raw Context & Keywords</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., 'Built e-commerce backend. MongoDB, Express, Node. Handled 10k daily requests. Secured with JWT.'"
                          className="resize-none bg-background/50 focus-visible:ring-purple-500/30 min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-primary hover:from-purple-700 hover:to-primary/90 text-white border-0 shadow-lg shadow-purple-500/25">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing Request...
                    </>
                  ) : (
                    <>
                      <Bot className="mr-2 h-4 w-4" />
                      Generate Output
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>

          <div className="flex items-center justify-center relative">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-primary/10 blur-3xl -z-10 rounded-full" />
            
            <Card className="w-full max-w-lg h-full min-h-[400px] flex flex-col shadow-2xl bg-background/80 backdrop-blur-xl border-border/50 overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-primary" />
              <CardHeader className="bg-secondary/20 border-b border-border/50 pb-4">
                <CardTitle className="flex items-center text-lg">
                  <Sparkles className="h-5 w-5 mr-2 text-purple-500" /> Output Terminal
                </CardTitle>
                <CardDescription>AI-generated professional summary</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-6 relative">
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm z-10">
                    <Loader2 className="w-10 h-10 animate-spin text-purple-500 mb-4" />
                    <span className="text-sm text-muted-foreground font-medium animate-pulse">Synthesizing data...</span>
                  </div>
                )}
                {generatedDescription ? (
                  <div className="prose prose-sm dark:prose-invert">
                    <p className="text-foreground leading-relaxed text-base">{generatedDescription.description}</p>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-muted-foreground/50 text-sm font-mono text-center border-2 border-dashed border-border/50 rounded-xl p-6">
                    Awaiting input parameters to generate content...
                  </div>
                )}
              </CardContent>
              {generatedDescription && (
                <CardFooter className="bg-secondary/20 border-t border-border/50 pt-4">
                  <Button variant="secondary" onClick={handleCopy} className="ml-auto rounded-full hover:bg-purple-500 hover:text-white transition-colors">
                    <Copy className="mr-2 h-4 w-4" />
                    Copy to Clipboard
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