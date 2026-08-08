"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal, Copy, Check, RotateCcw } from "lucide-react";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

const randomQuotes = [
  "\"Simplicity is prerequisite for reliability.\" — Edsger W. Dijkstra",
  "\"First, solve the problem. Then, write the code.\" — John Johnson",
  "\"Programs must be written for people to read, and only incidentally for machines to execute.\" — Abelson & Sussman",
  "\"Code is read far more often than it is written. Build for clarity, architect for performance.\"",
  "\"Make it work, make it right, make it fast.\" — Kent Beck"
];

export function TerminalConsole() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "quote",
      output: (
        <div className="space-y-1 text-xs sm:text-sm">
          <p className="text-emerald-400 font-semibold font-mono">Shreekanth K — Full-Stack Developer</p>
          <p className="text-sky-300 italic font-mono">
            {randomQuotes[0]}
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    let output: React.ReactNode;

    switch (trimmed) {
      case "help":
        output = (
          <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground my-1 font-mono">
            <div><span className="text-primary font-bold">about</span> - Background & BCA 2027</div>
            <div><span className="text-primary font-bold">stack</span> - Tech & frameworks</div>
            <div><span className="text-primary font-bold">projects</span> - Deployed web apps</div>
            <div><span className="text-primary font-bold">quote</span> - Philosophical quotes</div>
            <div><span className="text-primary font-bold">contact</span> - Email & GitHub</div>
            <div><span className="text-primary font-bold">uptime</span> - Azure server status</div>
            <div><span className="text-primary font-bold">clear</span> - Clear terminal</div>
            <div><span className="text-primary font-bold">help</span> - List commands</div>
          </div>
        );
        break;

      case "quote":
      case "philosophy":
        const randomQ = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
        output = (
          <div className="text-xs sm:text-sm font-mono text-sky-300 italic">
            {randomQ}
          </div>
        );
        break;

      case "about":
      case "whoami":
        output = (
          <div className="space-y-1 text-xs sm:text-sm font-mono">
            <p className="text-emerald-400 font-semibold">Shreekanth K — Full-Stack Developer</p>
            <p className="text-muted-foreground">Pursuing BCA (Expected 2027) | Bangalore, India (Remote)</p>
            <p className="text-sky-300">Building web apps, RAG AI vector search & real-time WebSockets.</p>
          </div>
        );
        break;

      case "stack":
        output = (
          <div className="space-y-1 text-xs sm:text-sm text-muted-foreground font-mono">
            <p><span className="text-amber-400 font-semibold">Frontend:</span> Next.js (App Router), React, TypeScript, Tailwind CSS</p>
            <p><span className="text-blue-400 font-semibold">Backend:</span> FastAPI, Python, Node.js, Redis, WebSockets</p>
            <p><span className="text-emerald-400 font-semibold">Databases:</span> PostgreSQL, pgvector Embeddings, OpenAI RAG</p>
            <p><span className="text-purple-400 font-semibold">DevOps:</span> Azure Linux VMs, Nginx, GitHub Actions, Stripe</p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-xs sm:text-sm font-mono">
            <div>
              <a href="https://planner.shreek.me" target="_blank" rel="noreferrer" className="text-primary underline font-bold">Academic Planner (AI SaaS)</a>
              <p className="text-muted-foreground text-xs">PDF Syllabus Ingestion + pgvector RAG + Stripe</p>
            </div>
            <div>
              <a href="https://agriconnect.shreek.me" target="_blank" rel="noreferrer" className="text-primary underline font-bold">Agri-Connect</a>
              <p className="text-muted-foreground text-xs">Real-Time Bidding Marketplace + PostGIS Search</p>
            </div>
            <div>
              <a href="https://nexusgames.shreek.me/" target="_blank" rel="noreferrer" className="text-primary underline font-bold">Nexus Games</a>
              <p className="text-muted-foreground text-xs">WebSocket Gaming Platform + Redis Relay</p>
            </div>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="text-xs sm:text-sm space-y-1 text-muted-foreground font-mono">
            <p>Email: <a href="mailto:shreekanth.k000001@gmail.com" className="text-primary underline font-bold">shreekanth.k000001@gmail.com</a></p>
            <p>Location: Bangalore, India (Open to Remote / Relocation)</p>
            <p>GitHub: <a href="https://github.com/Shreekanth000001" target="_blank" rel="noreferrer" className="text-primary underline">github.com/Shreekanth000001</a></p>
          </div>
        );
        break;

      case "uptime":
        output = (
          <div className="text-xs sm:text-sm font-mono text-emerald-400 space-y-1">
            <p>Host: Azure Linux VM (Ubuntu 24.04 LTS)</p>
            <p>Status: All services operational | Latency: 12ms</p>
          </div>
        );
        break;

      default:
        output = (
          <p className="text-xs sm:text-sm text-destructive font-mono">
            Command not recognized: '<span className="font-mono">{trimmed}</span>'. Type '<span className="text-primary font-bold">help</span>' for commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput("");
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shreekanth.k000001@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="w-full rounded-2xl border border-border/80 bg-slate-950 text-slate-100 shadow-2xl overflow-hidden font-mono text-sm group transition-all duration-300 hover:border-primary/50"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 select-none">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-xs text-slate-400 font-medium ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-primary" /> shreekanth@dev-node:~ (zsh)
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button 
            type="button"
            onClick={(e) => { e.stopPropagation(); handleCopyEmail(); }} 
            className="p-1 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            title="Copy Email"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <button 
            type="button"
            onClick={(e) => { e.stopPropagation(); setHistory([]); }} 
            className="p-1 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            title="Reset Shell"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 sm:p-6 min-h-[300px] max-h-[420px] overflow-y-auto space-y-4 terminal-scroll bg-slate-950/95">
        <div className="text-xs text-slate-400 pb-2 border-b border-slate-800/80 font-mono">
          <p className="text-primary font-bold">Interactive Dev Terminal [Shreekanth K]</p>
          <p className="mt-0.5">Type <span className="text-emerald-400 font-semibold">'about'</span>, <span className="text-emerald-400 font-semibold">'quote'</span>, or <span className="text-emerald-400 font-semibold">'help'</span>.</p>
        </div>

        {/* Command History */}
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5 font-mono">
            <div className="flex items-center text-xs sm:text-sm">
              <span className="text-primary font-bold mr-2">shreekanth@dev-box:~$</span>
              <span className="text-slate-100 font-semibold">{item.command}</span>
            </div>
            <div className="pl-4 border-l-2 border-slate-800 text-slate-300">
              {item.output}
            </div>
          </div>
        ))}

        {/* Active Input Line */}
        <form 
          onSubmit={(e) => { e.preventDefault(); handleCommand(input); }}
          className="flex items-center pt-1 font-mono"
        >
          <span className="text-primary font-bold text-xs sm:text-sm mr-2 shrink-0">shreekanth@dev-box:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-transparent text-slate-100 outline-none border-none text-xs sm:text-sm font-mono focus:ring-0 p-0"
            placeholder="Type command ('about', 'quote', 'stack')..."
            aria-label="Terminal Command Input"
          />
          <button type="submit" className="sr-only">Execute</button>
        </form>

        <div ref={bottomRef} />
      </div>

      {/* Quick Action Chips */}
      <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex flex-wrap gap-2 text-xs select-none">
        <span className="text-slate-400 flex items-center gap-1 font-mono text-[11px] mr-1">Quick Run:</span>
        {["about", "projects", "stack", "quote", "contact"].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={(e) => { e.stopPropagation(); handleCommand(cmd); }}
            className="px-2.5 py-1 rounded bg-slate-800 hover:bg-primary/20 hover:text-primary text-slate-300 border border-slate-700/60 transition-all font-mono text-[11px]"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
