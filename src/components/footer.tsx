import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AppFooter() {
  return (
    <footer className="w-full bg-secondary/50 py-6">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} FolioForge. All rights reserved.</p>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button asChild variant="ghost" size="icon">
            <Link href="https://x.com/Shreekanth001" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href="https://github.com/Shreekanth000001" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href="https://www.linkedin.com/in/shreekanth000001" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
