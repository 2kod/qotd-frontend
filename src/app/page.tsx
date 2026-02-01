"use client";

import React, { useState, useEffect } from "react";
import { 
  Play, CheckCircle, Trophy, Lightbulb, Bell, 
  Clock, BarChart2, ChevronRight, Code2, Menu 
} from "lucide-react";
import confetti from "canvas-confetti";
import { problemData, leaderboard } from "./data";

export default function QOTDPage() {
  const [code, setCode] = useState(problemData.starterCode);
  const [activeTab, setActiveTab] = useState<"desc" | "hints" | "leaderboard">("desc");
  const [output, setOutput] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "running" | "success">("idle");
  const [isSubscribed, setIsSubscribed] = useState(false);


  const handleRun = () => {
    setStatus("running");
    setOutput("Running test cases...");
    setTimeout(() => {
      setOutput(`Test Case 1: Passed \nTest Case 2: Passed \nOutput: [4,7,2,9,6,3,1]`);
      setStatus("idle");
    }, 1500);
  };


  const handleSubmit = () => {
    setStatus("running");
    setTimeout(() => {
      setStatus("success");
      setOutput("All Test Cases Passed! \nRuntime: 56ms (Beats 82%)");
      confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      
      {/* --- HEADER --- */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">TechLearn</span>
          </div>

          <div className="flex items-center gap-6">
            {/* Streak Counter (Habit Formation) */}
            <div className="hidden md:flex items-center gap-2 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
              <span className="text-orange-500">🔥</span>
              <span className="text-sm font-semibold text-orange-700">12 Day Streak</span>
            </div>
            
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors relative">
              <Bell className="w-5 h-5 text-slate-500" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm">
              JD
            </div>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT GRID --- */}
      <main className="max-w-7xl mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-4rem)]">
        
        {/* LEFT PANEL: Problem, Hints, Leaderboard */}
        <div className="lg:col-span-5 flex flex-col gap-4 h-full overflow-y-auto pb-20 custom-scrollbar">
          
          {/* Problem Header Card */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-2xl font-bold text-slate-900">{problemData.title}</h1>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full border border-yellow-200">
                {problemData.difficulty}
              </span>
            </div>
            
            {/* Stats Row */}
            <div className="flex gap-4 text-xs text-slate-500 mb-6 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{problemData.stats.successRate} Success</span>
              </div>
              <div className="flex items-center gap-1">
                <BarChart2 className="w-4 h-4 text-blue-500" />
                <span>{problemData.stats.attempts} Attempts</span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-2 bg-slate-100 p-1 rounded-lg mb-6">
              {["desc", "hints", "leaderboard"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                    activeTab === tab 
                    ? "bg-white text-blue-600 shadow-sm" 
                    : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {tab === "desc" ? "Description" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="prose prose-slate prose-sm max-w-none">
              {activeTab === "desc" && (
                <div className="animate-fadeIn">
                  <pre className="whitespace-pre-wrap font-sans text-slate-600 leading-relaxed">
                    {problemData.description}
                  </pre>
                </div>
              )}
              
              {activeTab === "hints" && (
                <div className="space-y-3 animate-fadeIn">
                  {problemData.hints.map((hint, i) => (
                    <div key={i} className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex gap-3">
                      <Lightbulb className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <p className="text-blue-800 text-sm m-0">{hint}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "leaderboard" && (
                <div className="space-y-2 animate-fadeIn">
                   {leaderboard.map((entry) => (
                     <div key={entry.rank} className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-100 transition-all">
                       <div className="flex items-center gap-3">
                         <span className={`w-6 text-center font-bold ${entry.rank === 1 ? 'text-yellow-500' : 'text-slate-400'}`}>#{entry.rank}</span>
                         <span className="font-medium text-slate-700">{entry.user}</span>
                       </div>
                       <div className="text-right">
                         <div className="font-mono text-xs text-slate-500">{entry.time}</div>
                         <div className="text-xs font-bold text-green-600">{entry.score}/100</div>
                       </div>
                     </div>
                   ))}
                </div>
              )}
            </div>
          </div>

          {/* Subscribe CTA */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-6 text-white flex justify-between items-center shadow-lg">
            <div>
              <h3 className="font-bold mb-1">Don't break your streak!</h3>
              <p className="text-slate-400 text-sm">Get notified when tomorrow's problem drops.</p>
            </div>
            <button 
              onClick={() => setIsSubscribed(!isSubscribed)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                isSubscribed ? "bg-green-500 text-white" : "bg-white text-slate-900 hover:bg-slate-100"
              }`}
            >
              {isSubscribed ? "Subscribed ✓" : "Notify Me"}
            </button>
          </div>
        </div>

        {/* RIGHT PANEL: Code Editor & Output */}
        <div className="lg:col-span-7 flex flex-col gap-4 h-full">
          
          {/* Code Editor Area */}
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 flex justify-between items-center">
              <span className="text-xs font-mono text-slate-500">JavaScript (Node)</span>
              <div className="flex gap-2">
                <button className="text-slate-400 hover:text-slate-600"><Clock className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="flex-1 relative">
              <textarea 
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full p-4 font-mono text-sm leading-6 resize-none outline-none text-slate-800 bg-white"
                spellCheck="false"
              />
            </div>
          </div>

          {/* Output & Actions Area */}
          <div className="bg-slate-900 rounded-xl shadow-lg border border-slate-800 overflow-hidden flex flex-col h-1/3 min-h-[200px]">
             {/* Action Bar */}
             <div className="bg-slate-800 px-4 py-3 flex justify-between items-center border-b border-slate-700">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Console</span>
                <div className="flex gap-3">
                  <button 
                    onClick={handleRun}
                    className="flex items-center gap-2 px-4 py-1.5 rounded-md text-slate-300 hover:bg-slate-700 hover:text-white transition-colors text-sm font-medium"
                  >
                    <Play className="w-4 h-4" /> Run
                  </button>
                  <button 
                    onClick={handleSubmit}
                    disabled={status === "running"}
                    className="flex items-center gap-2 px-6 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/20 shadow-lg transition-all text-sm font-bold"
                  >
                    {status === "running" ? "Running..." : "Submit Solution"}
                  </button>
                </div>
             </div>

             {/* Terminal Output */}
             <div className="flex-1 p-4 font-mono text-sm overflow-y-auto custom-scrollbar">
               {status === "idle" && !output && (
                 <div className="h-full flex flex-col items-center justify-center text-slate-600 gap-2">
                   <Code2 className="w-8 h-8 opacity-50" />
                   <p>Run your code to see output here</p>
                 </div>
               )}
               {output && (
                 <div className={`${status === "success" ? "text-green-400" : "text-slate-300"} whitespace-pre-wrap`}>
                   <span className="text-slate-500 mr-2">$</span>
                   {output}
                 </div>
               )}
             </div>
          </div>
        </div>

      </main>
    </div>
  );
}