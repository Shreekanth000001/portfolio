import { Github, Linkedin, Twitter, Code2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from '@/imgs/logo.png'

export function AppFooter() {
  return (
    <footer className="w-full bg-background border-t border-border/50 py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Image src={logo}  alt=" NO logo found" className="w-10 h-10 rounded-full"/>
          <span className="text-sm font-medium">
            Engineered by <span className="text-foreground font-semibold">Shreekanth K</span> &copy; {new Date().getFullYear()}
          </span>
        </div>
        
        <div className="flex gap-4">
          <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
            <Link href="https://x.com/Shreekanth001" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
            <Link href="https://github.com/Shreekanth000001" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
            <Link href="https://www.linkedin.com/in/shreekanth000001" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}