import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function AppFooter() {
  return (
    <footer className="w-full bg-background border-t border-border/60 py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Branding & Logo */}
        <div className="flex items-center gap-3 text-muted-foreground">
          <div className="relative w-8 h-8 overflow-hidden rounded-xl bg-white p-0.5 border border-slate-300 shadow-sm flex items-center justify-center">
            <Image 
              src="/logo.png"
              alt="Shreekanth K Logo"
              fill
              sizes="32px"
              className="object-contain p-0.5"
              priority
            />
          </div>
          <div className="flex flex-col text-xs font-mono">
            <span className="text-foreground font-semibold">
              Shreekanth K &copy; {new Date().getFullYear()}
            </span>
            <span className="text-muted-foreground text-[11px]">
              Full Stack Developer • Next.js & Python
            </span>
          </div>
        </div>

        {/* Center: Status */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-mono border border-emerald-500/20">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Available for Internships
        </div>
        
        {/* Right: Social Links */}
        <div className="flex gap-2">
          <Button asChild variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors">
            <Link href="https://x.com/Shreekanth001" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors">
            <Link href="https://github.com/Shreekanth000001" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors">
            <Link href="https://www.linkedin.com/in/shreekanth000001" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
            </Link>
          </Button>
        </div>

      </div>
    </footer>
  );
}