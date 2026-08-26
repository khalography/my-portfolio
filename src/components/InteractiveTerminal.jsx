import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RefreshCw, CheckCircle2, CornerDownLeft, Sparkles } from 'lucide-react';

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { type: 'system', content: 'SYSTEM READY // AI AUTOMATION ENGINE v2.6' },
    { type: 'system', content: 'Type "help" or click presets below to execute live automations.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    // Add user command to history
    setHistory((prev) => [...prev, { type: 'user', content: `$ ${cmdStr}` }]);
    setInputVal('');
    setIsExecuting(true);

    setTimeout(() => {
      let response = [];
      switch (cmd) {
        case 'help':
          response = [
            { type: 'output', content: 'AVAILABLE COMMANDS:' },
            { type: 'output', content: '  simulate-bot  -> Run live Telegram AI bot workflow simulation' },
            { type: 'output', content: '  view-stack    -> Display AI-native engineering tools & deployment flow' },
            { type: 'output', content: '  safaari-hub   -> View AI Lead role & Hub metrics' },
            { type: 'output', content: '  case-study    -> Inspect Onchainmutineers deployment specs' },
            { type: 'output', content: '  contact       -> Direct X/Twitter & Email connectivity' },
            { type: 'output', content: '  clear         -> Reset terminal console' },
          ];
          break;

        case 'simulate-bot':
          response = [
            { type: 'output', content: '[INIT] Webhook listener connected: https://api.telegram.org/bot<TOKEN>' },
            { type: 'output', content: '[AGENT] Claude 3.7 Sonnet reasoning pipeline loaded...' },
            { type: 'output', content: '[EVENT] User message received: "Check NFT mint status and community alerts"' },
            { type: 'output', content: '[EXEC] Querying Solana RPC node & Make.com webhook trigger...' },
            { type: 'success', content: '[RESPONSE SENT ⚡ 120ms] Bot automatically replied with mint progress & whitelist verification!' },
          ];
          break;

        case 'view-stack':
          response = [
            { type: 'output', content: 'AI-NATIVE FULL-STACK TOOLCHAIN:' },
            { type: 'output', content: '  ├─ Reasoning Engines: Claude 3.7, Antigravity IDE, ChatGPT, Google AI Studio' },
            { type: 'output', content: '  ├─ Automation Pipelines: Make.com (Integromat), Zapier, Python scripts' },
            { type: 'output', content: '  ├─ Domain & DNS: Namecheap, GoDaddy, Cloudflare' },
            { type: 'output', content: '  └─ Edge Hosting: Vercel, Netlify, GitHub Actions CI/CD' },
          ];
          break;

        case 'safaari-hub':
        case 'safari-hub':
          response = [
            { type: 'output', content: 'SAFAARI HUB ILORIN (NIGERIA):' },
            { type: 'output', content: '  Role: AI Lead' },
            { type: 'output', content: '  Mission: Leading AI automation workflows for startups, tech talents, and enterprise ops.' },
            { type: 'success', content: '  Location: Ilorin, Kwara State, Nigeria 🇳🇬' },
          ];
          break;

        case 'case-study':
        case 'onchainmutineers':
          response = [
            { type: 'output', content: 'CASE STUDY: Onchainmutineers (onchainmutineers.site)' },
            { type: 'output', content: '  ├─ Status: 200 OK (Deployed & Operational)' },
            { type: 'output', content: '  ├─ Domain: Custom acquired via registrar & mapped to edge DNS' },
            { type: 'output', content: '  └─ Build: 100% AI-native full-stack delivery by Ibraheem Qazeem' },
            { type: 'success', content: '  [HOVER PREVIEW ACTIVE] Hover over links on page to view live popover!' },
          ];
          break;

        case 'contact':
          response = [
            { type: 'output', content: 'DIRECT CONTACT CHANNELS:' },
            { type: 'output', content: '  X / Twitter : https://x.com/restnett (@restnett)' },
            { type: 'output', content: '  Email       : qazeemibraheem@gmail.com' },
            { type: 'success', content: '  Status      : Open for AI Automation Contracts & Full-time Roles' },
          ];
          break;

        case 'clear':
          setHistory([]);
          setIsExecuting(false);
          return;

        default:
          response = [
            { type: 'error', content: `Command not recognized: "${cmdStr}". Type "help" for command list.` }
          ];
          break;
      }

      setHistory((prev) => [...prev, ...response]);
      setIsExecuting(false);
    }, 300);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  return (
    <div className="w-full rounded-2xl glass-card border border-gray-800 overflow-hidden shadow-2xl bg-gray-950/90 font-mono text-xs sm:text-sm">
      {/* Terminal Bar */}
      <div className="bg-gray-900/90 px-4 py-3 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-xs text-gray-400 font-mono flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" /> ibraheem@automation-node:~
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> ONLINE
          </span>
          <button 
            onClick={() => executeCommand('clear')} 
            className="text-gray-500 hover:text-gray-300 p-1 rounded hover:bg-gray-800 transition-colors"
            title="Clear console"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Preset Quick Command Buttons */}
      <div className="bg-gray-900/40 px-4 py-2 border-b border-gray-800/60 flex items-center gap-2 overflow-x-auto scrollbar-none text-[11px]">
        <span className="text-gray-500 font-mono flex items-center gap-1 shrink-0">
          <Sparkles className="w-3 h-3 text-cyan-400" /> Presets:
        </span>
        <button 
          onClick={() => executeCommand('simulate-bot')}
          className="px-2.5 py-1 rounded bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/60 transition-colors whitespace-nowrap flex items-center gap-1"
        >
          <Play className="w-2.5 h-2.5 text-cyan-400" /> simulate-bot
        </button>
        <button 
          onClick={() => executeCommand('view-stack')}
          className="px-2.5 py-1 rounded bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/60 transition-colors whitespace-nowrap"
        >
          view-stack
        </button>
        <button 
          onClick={() => executeCommand('safaari-hub')}
          className="px-2.5 py-1 rounded bg-purple-950/70 border border-purple-500/30 text-purple-300 hover:bg-purple-900/60 transition-colors whitespace-nowrap"
        >
          safaari-hub
        </button>
        <button 
          onClick={() => executeCommand('case-study')}
          className="px-2.5 py-1 rounded bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/60 transition-colors whitespace-nowrap"
        >
          case-study
        </button>
        <button 
          onClick={() => executeCommand('contact')}
          className="px-2.5 py-1 rounded bg-amber-950/70 border border-amber-500/30 text-amber-300 hover:bg-amber-900/60 transition-colors whitespace-nowrap"
        >
          contact
        </button>
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 h-64 sm:h-72 overflow-y-auto space-y-2 text-left">
        {history.map((item, index) => (
          <div key={index} className="leading-relaxed">
            {item.type === 'user' && (
              <span className="text-cyan-400 font-semibold">{item.content}</span>
            )}
            {item.type === 'system' && (
              <span className="text-gray-500 italic">{item.content}</span>
            )}
            {item.type === 'output' && (
              <span className="text-gray-300 whitespace-pre-wrap">{item.content}</span>
            )}
            {item.type === 'success' && (
              <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> {item.content}
              </span>
            )}
            {item.type === 'error' && (
              <span className="text-rose-400">{item.content}</span>
            )}
          </div>
        ))}
        {isExecuting && (
          <div className="text-cyan-400 flex items-center gap-2 font-mono text-xs">
            <span className="animate-spin text-cyan-400">⚡</span> Executing automation task...
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Command Input Form */}
      <form onSubmit={handleFormSubmit} className="bg-gray-900/80 px-4 py-2.5 border-t border-gray-800 flex items-center gap-2">
        <span className="text-cyan-400 font-bold">$</span>
        <input 
          type="text" 
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder='Type a command ("help", "simulate-bot", "view-stack")'
          className="flex-1 bg-transparent text-gray-200 placeholder-gray-600 focus:outline-none font-mono text-xs sm:text-sm"
        />
        <button 
          type="submit" 
          className="text-gray-400 hover:text-cyan-400 p-1.5 rounded hover:bg-gray-800 transition-colors"
          title="Submit command"
        >
          <CornerDownLeft className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
