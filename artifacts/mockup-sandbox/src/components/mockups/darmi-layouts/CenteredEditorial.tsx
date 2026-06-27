import React, { useState } from 'react';
import { Download, ChevronDown, Plus, Minus, Server, Shield, EyeOff } from 'lucide-react';

export function CenteredEditorial() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div 
      className="min-h-screen text-[#2D2A26] antialiased selection:bg-[#D8836A] selection:text-white"
      style={{
        backgroundColor: 'hsl(36, 20%, 96%)',
        fontFamily: '"Hanken Grotesk", sans-serif',
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600;700&display=swap');
      `}} />

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-8 md:px-12 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tight">Darmi.</div>
        <button className="flex items-center gap-2 text-sm font-semibold tracking-wide hover:opacity-80 transition-opacity">
          Download Free
        </button>
      </nav>

      {/* Hero Section */}
      <header className="pt-20 pb-32 px-6 flex flex-col items-center text-center max-w-4xl mx-auto">
        <span className="inline-block py-1.5 px-4 rounded-full border border-[#D8836A]/30 text-[#D8836A] text-sm font-medium mb-12 tracking-wide uppercase">
          Private IBS Tracker
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-[#1A1A1A]">
          Track Food & Symptoms.<br />
          <span className="text-[#D8836A]">Understand Your Gut.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-[#5A5A5A] mb-12 max-w-2xl font-light leading-relaxed">
          A beautifully minimalist food and symptom diary designed specifically for IBS.
        </p>
        
        <button className="bg-[#D8836A] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#c27159] transition-colors shadow-lg shadow-[#D8836A]/20 flex items-center gap-3 mb-24">
          <Download size={20} />
          Download on the App Store
        </button>

        <div className="w-full max-w-md mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F6F4F0] z-10 top-1/2 rounded-b-3xl" />
          <img 
            src="/__mockup/images/darmi-phone-mockup-centered.png" 
            alt="Darmi app calendar view" 
            className="w-full h-auto rounded-[2.5rem] shadow-2xl relative z-0"
          />
        </div>
      </header>

      {/* Stats Ticker */}
      <section className="border-y border-[#2D2A26]/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-[#2D2A26]/10 text-center">
          <div className="px-8 py-4 md:py-0 w-full md:w-auto">
            <div className="text-3xl font-bold text-[#D8836A]">100%</div>
            <div className="text-sm font-medium tracking-widest uppercase text-[#5A5A5A] mt-2">On-Device</div>
          </div>
          <div className="px-8 py-4 md:py-0 w-full md:w-auto">
            <div className="text-3xl font-bold text-[#D8836A]">0</div>
            <div className="text-sm font-medium tracking-widest uppercase text-[#5A5A5A] mt-2">Accounts</div>
          </div>
          <div className="px-8 py-4 md:py-0 w-full md:w-auto">
            <div className="text-3xl font-bold text-[#D8836A]">4</div>
            <div className="text-sm font-medium tracking-widest uppercase text-[#5A5A5A] mt-2">Tracking Pillars</div>
          </div>
          <div className="px-8 py-4 md:py-0 w-full md:w-auto">
            <div className="text-3xl font-bold text-[#D8836A]">Free</div>
            <div className="text-sm font-medium tracking-widest uppercase text-[#5A5A5A] mt-2">Forever</div>
          </div>
        </div>
      </section>

      {/* Privacy Section (Dark) */}
      <section className="bg-[#1A1A1A] text-[#F6F4F0] py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 leading-tight">
            Your Gut Health is <br />
            <span className="text-[#D8836A]">None of Our Business.</span>
          </h2>

          <div className="flex flex-col gap-16">
            <div className="flex flex-col items-center">
              <Shield size={48} className="text-[#D8836A] mb-6 stroke-1" />
              <h3 className="text-2xl font-semibold mb-3">100% On-Device</h3>
              <p className="text-[#A0A0A0] text-lg max-w-md font-light">Your data never leaves your phone. Everything is stored locally in Apple Health and your device storage.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Server size={48} className="text-[#D8836A] mb-6 stroke-1" />
              <h3 className="text-2xl font-semibold mb-3">No Accounts or Servers</h3>
              <p className="text-[#A0A0A0] text-lg max-w-md font-light">We don't want your email. We don't have servers to store your data. Just download and use.</p>
            </div>

            <div className="flex flex-col items-center">
              <EyeOff size={48} className="text-[#D8836A] mb-6 stroke-1" />
              <h3 className="text-2xl font-semibold mb-3">Zero Tracking</h3>
              <p className="text-[#A0A0A0] text-lg max-w-md font-light">No analytics, no ads, no third-party trackers. Your most sensitive data remains entirely yours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-32">
          
          <div className="relative text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-bold text-[#D8836A]/5 pointer-events-none z-0">01</div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Log Meals & Symptoms In Seconds</h3>
              <p className="text-xl text-[#5A5A5A] mb-8 font-light max-w-lg mx-auto">A frictionless interface designed for when you're in a hurry or not feeling well. No barcode scanning required.</p>
              <div className="flex justify-center gap-3 flex-wrap">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-[#2D2A26]/10">Meals</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-[#2D2A26]/10">Symptoms</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-[#2D2A26]/10">Bowel Movements</span>
              </div>
            </div>
          </div>

          <div className="relative text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-bold text-[#D8836A]/5 pointer-events-none z-0">02</div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Avoid Triggers. Find Safe Foods.</h3>
              <p className="text-xl text-[#5A5A5A] mb-8 font-light max-w-lg mx-auto">Cross-reference your worst days with your meals to identify problem ingredients. Build a safe list over time.</p>
              <div className="flex justify-center gap-3 flex-wrap">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-[#2D2A26]/10">FODMAP Guide</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-[#2D2A26]/10">Trigger Alerts</span>
              </div>
            </div>
          </div>

          <div className="relative text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-bold text-[#D8836A]/5 pointer-events-none z-0">03</div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Understand Your Body's Patterns</h3>
              <p className="text-xl text-[#5A5A5A] mb-8 font-light max-w-lg mx-auto">Beautiful, easy-to-read charts that make sense of your data over weeks and months.</p>
              <div className="flex justify-center gap-3 flex-wrap">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-[#2D2A26]/10">Trends</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-[#2D2A26]/10">Insights</span>
              </div>
            </div>
          </div>

          <div className="relative text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-bold text-[#D8836A]/5 pointer-events-none z-0">04</div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Bring Better Data To Your Doctor</h3>
              <p className="text-xl text-[#5A5A5A] mb-8 font-light max-w-lg mx-auto">Export clean, structured PDF reports for your gastroenterologist or dietitian.</p>
              <div className="flex justify-center gap-3 flex-wrap">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-[#2D2A26]/10">PDF Export</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-[#2D2A26]/10">Print Ready</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="divide-y divide-[#2D2A26]/10 border-t border-[#2D2A26]/10">
            {[
              {
                q: "Is Darmi really free?",
                a: "Yes. The core tracking features are completely free forever. We may introduce optional premium features later, but tracking your food and symptoms will never be paywalled."
              },
              {
                q: "Do I need to make an account?",
                a: "No. You don't need to sign up, provide an email, or create a password. Just download the app and start using it."
              },
              {
                q: "Where is my data stored?",
                a: "Your data is stored exclusively on your iPhone in its local storage. We do not have servers, and we do not sync your data to any cloud service other than your own iCloud backup."
              },
              {
                q: "Can I track the Low FODMAP diet?",
                a: "Yes! Darmi is designed specifically with IBS diets in mind and includes features to help you track high and low FODMAP foods."
              },
              {
                q: "Can I share this with my doctor?",
                a: "Absolutely. You can generate a clean, readable PDF report of your logs over a specific time period to share with your healthcare provider."
              }
            ].map((faq, i) => (
              <div key={i} className="py-6">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center text-left hover:text-[#D8836A] transition-colors"
                >
                  <span className="text-lg font-medium">{faq.q}</span>
                  {openFaq === i ? <Minus size={20} className="text-[#D8836A]" /> : <Plus size={20} className="text-[#5A5A5A]" />}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[#5A5A5A] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 text-center flex flex-col items-center">
        <h2 className="text-4xl font-bold tracking-tight mb-8">Ready to understand your gut?</h2>
        <button className="bg-[#D8836A] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#c27159] transition-colors shadow-lg shadow-[#D8836A]/20 flex items-center gap-3 mb-16">
          <Download size={20} />
          Download on the App Store
        </button>
        
        <div className="text-2xl font-bold mb-4">Darmi.</div>
        <a href="mailto:darmi.feedback@gmail.com" className="text-[#5A5A5A] hover:text-[#D8836A] transition-colors mb-12">
          darmi.feedback@gmail.com
        </a>
        
        <div className="text-sm text-[#A0A0A0]">
          © {new Date().getFullYear()} Darmi. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
