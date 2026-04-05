import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function AppHeader() {
  return (
    <header className="w-full px-4 lg:px-8 h-16 flex items-center bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border/50 transition-all duration-300">
      <Link href="#" className="flex items-center justify-center group" prefetch={false}>
        {/* Logo Image Container */}
        <div className="relative w-10 h-10 overflow-hidden rounded-md  ">
          <Image 
            src="/logo.png"
            alt="SK Logo"
            fill
            sizes="40px"
            className="object-cover"
            priority
          />
        </div>
        {/* Gradient Text matching the logo theme */}
        <span className="ml-3 text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Shreekanth K
        </span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-6 lg:gap-8">
        <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
          About
        </Link>
        <Link href="#projects" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
          Projects
        </Link>
        <Link href="#process" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
          Process
        </Link>
        <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
          Contact
        </Link>
      </nav>
      <div className=" ml-auto md:ml-0 pl-4 lg:pl-8">
          <ThemeToggle />
        </div>
    </header>
  );
}