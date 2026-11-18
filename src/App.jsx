import React, { useState, useEffect } from 'react';
import Option1_ExecutiveCorporate from './options/Option1_ExecutiveCorporate';
import Option2_TechProgrammatic from './options/Option2_TechProgrammatic';
import Option3_EditorialSolutions from './options/Option3_EditorialSolutions';
import { Eye, Check, ExternalLink, Sparkles, Sliders } from 'lucide-react';

export default function App() {
  const [selectedOption, setSelectedOption] = useState('1');
  const [showSwitcher, setShowSwitcher] = useState(true);

  useEffect(() => {
    // If forced by pathname
    const path = window.location.pathname.toLowerCase();
    if (path.includes('option1')) {
      setSelectedOption('1');
      setShowSwitcher(false);
      return;
    }
    if (path.includes('option2')) {
      setSelectedOption('2');
      setShowSwitcher(false);
      return;
    }
    if (path.includes('option3')) {
      setSelectedOption('3');
      setShowSwitcher(false);
      return;
    }

    // If forced by server
    if (window.__FORCED_OPTION__) {
      setSelectedOption(window.__FORCED_OPTION__);
      setShowSwitcher(false);
      return;
    }

    // Read query parameter if present
    const params = new URLSearchParams(window.location.search);
    const v = params.get('v') || params.get('version') || params.get('option');
    if (v === '1' || v === '2' || v === '3') {
      setSelectedOption(v);
    }
    if (params.get('standalone') === 'true' || params.get('clean') === 'true') {
      setShowSwitcher(false);
    }
  }, []);

  const changeOption = (opt) => {
    setSelectedOption(opt);
    const url = new URL(window.location);
    url.searchParams.set('v', opt);
    window.history.pushState({}, '', url);
  };

  return (
    <div className="relative">
      
      {/* Top Floating Option Switcher Bar */}
      {showSwitcher && (
        <div className="sticky top-0 z-50 bg-[#001D27]/95 backdrop-blur-md border-b border-[#18A1BB]/30 text-white py-2.5 px-4 shadow-xl">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#18A1BB] animate-ping"></span>
              <span className="font-extrabold uppercase tracking-wider text-slate-200">
                TopSolutions Media LTD:
              </span>
              <span className="text-slate-400 hidden md:inline">
                3 PR Website Versions (Zero Buttons & Campaigns)
              </span>
            </div>

            {/* 3 Option Switcher Buttons */}
            <div className="inline-flex p-1 rounded-xl bg-[#00141C] border border-white/10">
              <button
                onClick={() => changeOption('1')}
                className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
                  selectedOption === '1'
                    ? 'bg-[#18A1BB] text-[#001D27] shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>Option 1: Executive Corporate</span>
                {selectedOption === '1' && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </button>

              <button
                onClick={() => changeOption('2')}
                className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
                  selectedOption === '2'
                    ? 'bg-[#18A1BB] text-[#001D27] shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>Option 2: Tech Programmatic</span>
                {selectedOption === '2' && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </button>

              <button
                onClick={() => changeOption('3')}
                className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
                  selectedOption === '3'
                    ? 'bg-[#18A1BB] text-[#001D27] shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>Option 3: Editorial Agency</span>
                {selectedOption === '3' && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </button>
            </div>

            <button
              onClick={() => setShowSwitcher(false)}
              className="text-[11px] text-slate-400 hover:text-white transition hidden lg:inline"
              title="Hide switcher bar for client presentation"
            >
              [Hide Bar]
            </button>

          </div>
        </div>
      )}

      {/* Render Selected Website Version */}
      {selectedOption === '1' && <Option1_ExecutiveCorporate />}
      {selectedOption === '2' && <Option2_TechProgrammatic />}
      {selectedOption === '3' && <Option3_EditorialSolutions />}

    </div>
  );
}
