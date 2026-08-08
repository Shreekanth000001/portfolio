"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, Code2, User, FolderGit2, Cpu, Mail, Github, Linkedin, Twitter, Moon, Sun, Check, Copy } from "lucide-react";
import { useTheme } from "next-themes";
import { useToast } from "@/hooks/use-toast";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  const handleNavigate = (href: string) => {
    onOpenChange(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shreekanth.k000001@gmail.com");
    setCopied(true);
    toast({
      title: "Email Copied!",
      description: "shreekanth.k000001@gmail.com copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
    onOpenChange(false);
  };

  const items = [
    {
      group: "Navigation",
      list: [
        { title: "About & Tech Stack", icon: User, action: () => handleNavigate("#about") },
        { title: "Selected Projects", icon: FolderGit2, action: () => handleNavigate("#projects") },
        { title: "AI Copywriting Lab", icon: Cpu, action: () => handleNavigate("#ai-generator") },
        { title: "Engineering Process", icon: Code2, action: () => handleNavigate("#process") },
        { title: "Contact & Reach Out", icon: Mail, action: () => handleNavigate("#contact") },
      ],
    },
    {
      group: "Quick Actions",
      list: [
        { 
          title: "Copy Email Address", 
          icon: copied ? Check : Copy, 
          action: handleCopyEmail 
        },
        { 
          title: `Switch Theme (Current: ${theme === "dark" ? "Dark" : "Light"})`, 
          icon: theme === "dark" ? Sun : Moon, 
          action: () => { setTheme(theme === "dark" ? "light" : "dark"); onOpenChange(false); } 
        },
      ],
    },
    {
      group: "External Profiles",
      list: [
        { title: "GitHub Profile", icon: Github, action: () => window.open("https://github.com/Shreekanth000001", "_blank") },
        { title: "LinkedIn Profile", icon: Linkedin, action: () => window.open("https://www.linkedin.com/in/shreekanth000001", "_blank") },
        { title: "Twitter / X Profile", icon: Twitter, action: () => window.open("https://x.com/Shreekanth001", "_blank") },
      ],
    },
  ];

  const filteredItems = items.map((g) => ({
    ...g,
    list: g.list.filter((item) => item.title.toLowerCase().includes(query.toLowerCase())),
  })).filter((g) => g.list.length > 0);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl p-0 gap-0 border-border/80 bg-background/95 backdrop-blur-xl overflow-hidden shadow-2xl rounded-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>Command Palette</DialogTitle>
        </DialogHeader>

        {/* Search Bar */}
        <div className="flex items-center px-4 border-b border-border/60">
          <Search className="w-5 h-5 text-muted-foreground mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search..."
            className="w-full h-14 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-sm font-medium"
            autoFocus
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-border mr-4 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
            ESC
          </kbd>
        </div>

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-4">
          {filteredItems.length === 0 ? (
            <div className="p-6 text-center text-sm text-muted-foreground font-mono">
              No matching commands found.
            </div>
          ) : (
            filteredItems.map((group, idx) => (
              <div key={idx} className="space-y-1">
                <p className="px-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  {group.group}
                </p>
                {group.list.map((item, itemIdx) => (
                  <button
                    key={itemIdx}
                    onClick={item.action}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm hover:bg-primary/10 hover:text-primary transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="font-medium text-foreground group-hover:text-primary">{item.title}</span>
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Select ↵
                    </span>
                  </button>
                ))}
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
