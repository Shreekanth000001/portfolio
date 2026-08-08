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
import { Sparkles, Copy, Loader2, Bot, Check, Zap } from "lucide-react";

const formSchema = z.object({
  keywords: z.string().min(10, {
    message: "Please enter at least 10 characters of keywords.",
  }),
});

interface GenerationOutput {
  description: string;
}

const presetPrompts = [
  { label: "RAG Syllabus SaaS", text: "Built Academic Planner AI SaaS. Uses PDF parsing, pgvector embeddings, OpenAI RAG pipelines, and Stripe monetization." },
  { label: "Agri Marketplace", text: "Engineered Agri-Connect. Real-time bidding marketplace with PostgreSQL relational data models and geospatial GIS mapping for farmers." },
  { label: "WebSocket Gaming App", text: "Developed Nexus Games social platform. Engineered WebSocket infrastructure, Redis instant messaging, and community matchmaking." }
];

export function AIGenerator() {
  const [generatedDescription, setGeneratedDescription] = useState<GenerationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
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
      setCopied(true);
      toast({
        title: "Copied to Clipboard!",
        description: "Generated description copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const applyPreset = (text: string) => {
    form.setValue("keywords", text);
    form.trigger("keywords");
  };

  return (
    <section id="ai-generator" className="w-full flex flex-col justify-center items-center py-24 md:py-32 bg-secondary/10 border-y border-border/60 relative">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-semibold text-purple-400">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" /> Live Gemini AI Playground
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-sans">
              Interactive AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary">Prompt Engine</span>
            </h2>
            
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Test my live Genkit & Google Gemini API integration. Input raw tech stack notes or pick a preset prompt to generate concise project descriptions.
            </p>

            {/* Presets */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5 font-semibold">
                <Zap className="w-3.5 h-3.5 text-amber-400" /> Sample Technical Prompts:
              </span>
              <div className="flex flex-wrap gap-2">
                {presetPrompts.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => applyPreset(preset.text)}
                    className="px-2.5 py-1 rounded-md bg-secondary hover:bg-purple-500/20 text-xs font-mono text-foreground border border-border/60 transition-colors"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 bg-card/70 p-6 rounded-2xl border border-border/70 backdrop-blur-md">
                <FormField
                  control={form.control}
                  name="keywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-xs sm:text-sm">Raw Project Context / Stack</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., 'Built e-commerce backend. MongoDB, Express, Node. Handled 10k daily requests. Secured with JWT.'"
                          className="resize-none bg-background/50 focus-visible:ring-purple-500/30 min-h-[110px] text-xs sm:text-sm font-mono"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  disabled={isLoading} 
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-primary hover:from-purple-700 hover:to-primary/90 text-white border-0 shadow-lg shadow-purple-500/25 rounded-xl h-11 px-6 text-xs sm:text-sm font-semibold"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Calling Gemini API...
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
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-primary/10 blur-3xl -z-10 rounded-full" />
            
            <Card className="w-full max-w-lg min-h-[380px] flex flex-col shadow-xl bg-card/80 backdrop-blur-xl border-border/70 overflow-hidden rounded-2xl">
              <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-primary" />
              
              <CardHeader className="bg-secondary/30 border-b border-border/60 pb-3">
                <CardTitle className="flex items-center text-sm font-mono font-bold">
                  <Sparkles className="h-4 w-4 mr-2 text-purple-400" /> Output Terminal (Gemini 2.5 Flash)
                </CardTitle>
                <CardDescription className="text-xs">Generated project summary</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow p-6 relative">
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/70 backdrop-blur-sm z-10">
                    <Loader2 className="w-8 h-8 animate-spin text-purple-400 mb-3" />
                    <span className="text-xs text-muted-foreground font-mono">Generating via Genkit & Gemini 2.5...</span>
                  </div>
                )}
                {generatedDescription ? (
                  <div className="text-xs sm:text-sm text-foreground leading-relaxed font-sans">
                    {generatedDescription.description}
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-muted-foreground/60 text-xs font-mono text-center border border-dashed border-border/60 rounded-xl p-6">
                    Pick a prompt or type keywords to test live Gemini AI generation...
                  </div>
                )}
              </CardContent>
              
              {generatedDescription && (
                <CardFooter className="bg-secondary/30 border-t border-border/60 py-3 px-6">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleCopy} 
                    className="ml-auto rounded-lg text-xs font-mono border-border/80"
                  >
                    {copied ? <Check className="mr-1.5 h-3.5 w-3.5 text-emerald-400" /> : <Copy className="mr-1.5 h-3.5 w-3.5" />}
                    {copied ? "Copied" : "Copy Output"}
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