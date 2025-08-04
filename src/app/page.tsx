import { AppHeader } from "@/components/header";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { AIGenerator } from "@/components/ai-generator";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { AppFooter } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <AppHeader />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Craft Your Digital Presence
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  FolioForge helps you build a stunning portfolio that showcases your skills and projects. Impress clients and collaborators with a professional, clean, and modern design.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="#contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Projects />
        <AIGenerator />
        <Testimonials />
        <Contact />
      </main>
      <AppFooter />
    </div>
  );
}
