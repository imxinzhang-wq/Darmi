import React from 'react';

export function BentoGrid() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600;700;800&display=swap');
        .font-hanken { font-family: 'Hanken Grotesk', sans-serif; }
      `}} />
      <div className="font-hanken min-h-screen selection:bg-[#D8836A] selection:text-white" style={{ backgroundColor: 'hsl(36, 20%, 96%)', color: '#2D2D2D' }}>
        
        {/* Navigation */}
        <nav className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-white/50 border-b border-black/5">
          <div className="text-2xl font-bold tracking-tight text-[#D8836A]">Darmi.</div>
          <button className="bg-[#D8836A] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#c2755f] transition-colors shadow-sm">
            Download Free
          </button>
        </nav>

        <main className="max-w-[1200px] mx-auto px-6 pt-20 pb-32">
          
          {/* Hero Section */}
          <section className="relative flex flex-col md:flex-row items-center justify-between mb-24 z-10">
            <div className="max-w-xl md:pr-12 text-center md:text-left mb-12 md:mb-0">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 text-[#1A1A1A]">
                Track Food & Symptoms.<br/>
                <span className="text-[#D8836A]">Understand Your Gut.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium leading-relaxed">
                A beautifully minimalist food and symptom diary designed for IBS.
              </p>
              <button className="bg-[#D8836A] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#c2755f] transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-[#D8836A]/20">
                Download on the App Store
              </button>
            </div>
            
            <div className="w-full md:w-[400px] flex-shrink-0 relative">
              {/* Phone Mockup overlapping into the grid below */}
              <div className="relative z-20 md:-mb-32 transform translate-y-8 md:translate-y-16">
                <img 
                  src="/__mockup/images/darmi-phone-bento.png" 
                  alt="Darmi App Interface Mockup" 
                  className="w-full drop-shadow-2xl rounded-[3rem]"
                />
              </div>
            </div>
          </section>

          {/* Bento Grid */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-0">
            
            {/* Privacy Card (2 cols, dark) */}
            <div className="md:col-span-2 bg-[#232323] text-white rounded-[1.5rem] p-10 flex flex-col justify-center shadow-lg transform transition hover:-translate-y-1">
              <div className="mb-4 text-[#D8836A] bg-[#D8836A]/20 w-fit p-3 rounded-2xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Your Gut Health is None of Our Business.</h2>
              <ul className="space-y-3 font-medium text-gray-300">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#D8836A]"></div> On-Device Data Only</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#D8836A]"></div> No Accounts or Servers</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#D8836A]"></div> Zero Tracking</li>
              </ul>
            </div>

            {/* Log Fast (1 col, coral tint) */}
            <div className="md:col-span-1 bg-[#FDF5F3] border border-[#D8836A]/10 rounded-[1.5rem] p-8 flex flex-col shadow-sm transform transition hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-3 text-[#1A1A1A]">Log in Seconds</h3>
              <p className="text-gray-600 font-medium">Record meals, symptoms, stress, and bowel movements without friction.</p>
              <div className="mt-auto pt-8">
                <div className="h-12 bg-white rounded-xl shadow-sm border border-black/5 flex items-center px-4 gap-3">
                  <div className="w-4 h-4 rounded-full bg-green-400"></div>
                  <div className="h-2 w-1/2 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Trigger (1 col, off-white) */}
            <div className="md:col-span-1 bg-white rounded-[1.5rem] p-8 flex flex-col shadow-sm border border-black/5 transform transition hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-3 text-[#1A1A1A]">Avoid Triggers</h3>
              <p className="text-gray-600 font-medium">Find safe foods by isolating exactly what causes flare-ups.</p>
              <div className="mt-auto pt-8 flex gap-2">
                 <span className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm font-bold">Dairy</span>
                 <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-sm font-bold">Onion</span>
              </div>
            </div>

            {/* Stats 1x1 */}
            <div className="md:col-span-1 bg-[#D8836A] text-white rounded-[1.5rem] p-8 flex flex-col items-center justify-center text-center shadow-md transform transition hover:-translate-y-1">
              <div className="text-5xl font-black mb-2">100%</div>
              <div className="text-white/80 font-semibold tracking-wide uppercase text-sm">On-Device</div>
            </div>

            {/* Patterns (2 cols) */}
            <div className="md:col-span-2 bg-white rounded-[1.5rem] p-10 flex flex-col shadow-sm border border-black/5 transform transition hover:-translate-y-1">
              <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-[#1A1A1A]">Understand Patterns</h3>
                  <p className="text-gray-600 font-medium text-lg leading-relaxed">Connect the dots between your diet, stress levels, and IBS symptoms with clear, beautiful charts.</p>
                </div>
                <div className="w-full md:w-1/2 h-32 bg-gradient-to-tr from-[#FDF5F3] to-[#f4f4f4] rounded-2xl border border-black/5 p-4 flex items-end gap-2">
                  <div className="w-full bg-[#D8836A] rounded-t-md h-[40%] opacity-60"></div>
                  <div className="w-full bg-[#D8836A] rounded-t-md h-[70%] opacity-80"></div>
                  <div className="w-full bg-[#D8836A] rounded-t-md h-[30%] opacity-40"></div>
                  <div className="w-full bg-[#D8836A] rounded-t-md h-[90%]"></div>
                  <div className="w-full bg-[#D8836A] rounded-t-md h-[50%] opacity-60"></div>
                </div>
              </div>
            </div>

            {/* Stats 1x1 */}
            <div className="md:col-span-1 bg-[#232323] text-white rounded-[1.5rem] p-8 flex flex-col items-center justify-center text-center shadow-md transform transition hover:-translate-y-1">
              <div className="text-5xl font-black mb-2 text-[#D8836A]">0</div>
              <div className="text-gray-400 font-semibold tracking-wide uppercase text-sm">Accounts</div>
            </div>

            {/* Doctor Export */}
            <div className="md:col-span-2 bg-[#FDF5F3] border border-[#D8836A]/20 rounded-[1.5rem] p-8 flex flex-row items-center gap-6 shadow-sm transform transition hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-[#D8836A]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#1A1A1A]">Better Data for Your Doctor</h3>
                <p className="text-gray-600 font-medium">Export a clean PDF report of your history to make gastroenterologist visits actually useful.</p>
              </div>
            </div>

            <div className="md:col-span-1 bg-white rounded-[1.5rem] p-8 flex flex-col items-center justify-center text-center shadow-sm border border-black/5 transform transition hover:-translate-y-1">
              <div className="text-5xl font-black mb-2 text-[#1A1A1A]">4</div>
              <div className="text-gray-500 font-semibold tracking-wide uppercase text-sm">Pillars</div>
            </div>
            
            <div className="md:col-span-1 bg-[#D8836A] text-white rounded-[1.5rem] p-8 flex flex-col items-center justify-center text-center shadow-md transform transition hover:-translate-y-1">
              <div className="text-4xl font-black mb-2">Free</div>
              <div className="text-white/80 font-semibold tracking-wide uppercase text-sm">Forever</div>
            </div>

            {/* FAQ (Full Width) */}
            <div className="md:col-span-4 bg-white rounded-[1.5rem] p-10 mt-6 shadow-sm border border-black/5">
              <h2 className="text-3xl font-bold mb-8 text-center text-[#1A1A1A]">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-[#1A1A1A]">Where is my data stored?</h4>
                  <p className="text-gray-600 font-medium">Strictly on your iOS device. We don't have servers, so we couldn't see your data even if we wanted to.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-[#1A1A1A]">Do I need an account?</h4>
                  <p className="text-gray-600 font-medium">No. Just download and start tracking immediately. No email required.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-[#1A1A1A]">How does the doctor export work?</h4>
                  <p className="text-gray-600 font-medium">You can generate a PDF summary of your selected timeframe, ready to print or email directly from your phone.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-[#1A1A1A]">Can it track stress?</h4>
                  <p className="text-gray-600 font-medium">Yes, Darmi tracks food, symptoms, bowel movements, and stress levels to give a complete picture.</p>
                </div>
              </div>
            </div>

          </section>
        </main>

        <footer className="bg-[#1A1A1A] text-white py-16 px-6 text-center">
          <div className="text-3xl font-bold tracking-tight text-[#D8836A] mb-6">Darmi.</div>
          <p className="text-gray-400 mb-8 font-medium">Understand your gut. Take back control.</p>
          <a href="mailto:darmi.feedback@gmail.com" className="inline-block bg-white/10 hover:bg-white/20 transition-colors px-6 py-3 rounded-full text-sm font-semibold">
            darmi.feedback@gmail.com
          </a>
          <div className="mt-16 text-xs text-gray-600 font-medium">
            © {new Date().getFullYear()} Darmi. All rights reserved.
          </div>
        </footer>

      </div>
    </>
  );
}
