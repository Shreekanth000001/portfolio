"use client";

import { useState } from "react";
import { AppHeader } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";
import { AppFooter } from "@/components/footer";
import { AIGenerator } from "@/components/ai-generator";
import { CommandPalette } from "@/components/command-palette";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-dvh bg-background selection:bg-primary selection:text-primary-foreground max-w-full overflow-x-hidden">
      <AppHeader onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
      <CommandPalette open={commandPaletteOpen} onOpenChange={setCommandPaletteOpen} />
      <main className="flex-1 relative overflow-x-hidden">
        <Hero onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
        <About />
        <Projects />
        <AIGenerator />
        <Process />
        <Contact />
      </main>
      <AppFooter />
    </div>
  );
}