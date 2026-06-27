import React from "react";

export function SplitAsymmetric() {
  return (
    <div
      style={{
        fontFamily: "'Hanken Grotesk', sans-serif",
        backgroundColor: "hsl(36, 20%, 96%)",
        color: "#1a1a1a",
      }}
      className="min-h-screen overflow-x-hidden selection:bg-[#D8836A] selection:text-white"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600;700;800&display=swap');
      `}} />

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-[1400px] mx-auto border-b border-black/5">
        <div className="text-2xl font-bold tracking-tight">Darmi.</div>
        <button
          style={{ backgroundColor: "#D8836A" }}
          className="text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Download Free
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-8 pt-20 pb-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col items-start pr-8">
            <h1 className="text-[4.5rem] lg:text-[6rem] leading-[1.05] tracking-tight font-bold mb-8 text-[#1a1a1a]">
              Track Food & Symptoms.<br />
              <span className="text-black/40">Understand Your Gut.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-black/60 mb-10 max-w-2xl font-medium leading-relaxed">
              A beautifully minimalist food and symptom diary designed specifically for IBS.
            </p>
            <button
              style={{ backgroundColor: "#D8836A" }}
              className="text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-transform hover:scale-105"
            >
              Download on the App Store
            </button>
          </div>
          <div className="lg:col-span-5 relative w-full flex justify-end">
            <div className="w-full max-w-[450px] aspect-[3/4] relative rounded-[3rem] overflow-hidden shadow-2xl bg-white border-[8px] border-[#222]">
               <img 
                 src="/__mockup/images/darmi-hero-phone.png" 
                 alt="Darmi App Calendar Mockup" 
                 className="w-full h-full object-cover"
                 onError={(e) => {
                   e.currentTarget.src = 'https://placehold.co/800x1200/F6F4F0/D8836A?text=App+Mockup';
                 }}
               />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-black/10">
        <div className="max-w-[1400px] mx-auto px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-start">
              <span className="text-4xl lg:text-5xl font-bold mb-2">100%</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-black/50">On-Device</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-4xl lg:text-5xl font-bold mb-2">0</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-black/50">Accounts</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-4xl lg:text-5xl font-bold mb-2">4</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-black/50">Tracking Pillars</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-4xl lg:text-5xl font-bold mb-2">Free</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-black/50">Forever</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section (Dramatic Split) */}
      <section className="bg-[#1a1a1a] text-[#F6F4F0] min-h-[600px] flex flex-col lg:flex-row">
        <div className="lg:w-[40%] p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
          <div className="text-7xl mb-8">🔒</div>
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            Your Gut Health is None of Our Business.
          </h2>
          <p className="text-xl text-white/60 font-medium">
            Privacy isn't a feature. It's the entire foundation.
          </p>
        </div>
        <div className="lg:w-[60%] p-12 lg:p-24 flex flex-col justify-center gap-10 bg-[#222]">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-[#D8836A]">1. 100% On-Device</h3>
            <p className="text-lg text-white/70">Your data never leaves your phone. It is stored securely entirely in local storage.</p>
          </div>
          <div className="w-full h-[1px] bg-white/10"></div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-[#D8836A]">2. No Accounts or Servers</h3>
            <p className="text-lg text-white/70">We don't even have a database. There is no login, no password, and nothing to hack.</p>
          </div>
          <div className="w-full h-[1px] bg-white/10"></div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-[#D8836A]">3. Zero Tracking</h3>
            <p className="text-lg text-white/70">No analytics, no ad SDKs, no behavioral profiling. Just you and your diary.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-8 max-w-[1400px] mx-auto flex flex-col gap-32">
        {/* Feature 1: Visual L, Text R */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 bg-white p-12 rounded-[2rem] shadow-sm border border-black/5 aspect-square flex flex-col justify-center items-start gap-4">
             <div className="flex gap-3 mb-8 flex-wrap">
               <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium text-sm">🍎 Apple</span>
               <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full font-medium text-sm">🍞 Wheat</span>
               <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-medium text-sm">🥛 Dairy</span>
             </div>
             <div className="w-full h-32 border-l-2 border-black/10 pl-6 flex flex-col justify-center gap-2">
               <div className="text-lg font-semibold">Mild Bloating</div>
               <div className="text-sm text-black/50">Recorded 2 mins ago</div>
             </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col items-start">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Log Meals & Symptoms In Seconds</h2>
            <p className="text-xl text-black/60 leading-relaxed">
              No bloated food databases. No calorie counting. Just quick, custom tags for exactly what you ate and exactly how you feel.
            </p>
          </div>
        </div>

        {/* Feature 2: Text L, Visual R */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Avoid Triggers. Find Safe Foods.</h2>
            <p className="text-xl text-black/60 leading-relaxed">
              Stop guessing. See exactly which ingredients consistently cause issues, and which ones leave you feeling great.
            </p>
          </div>
          <div className="bg-white rounded-[2rem] shadow-sm border border-black/5 aspect-square overflow-hidden flex items-center justify-center p-8">
            <img 
               src="/__mockup/images/darmi-triggers.png" 
               alt="Trigger UI" 
               className="w-full h-full object-contain mix-blend-multiply"
               onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </div>

        {/* Feature 3: Visual L, Text R */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 bg-[#D8836A] p-12 rounded-[2rem] text-white aspect-square flex flex-col justify-end relative overflow-hidden">
             <div className="absolute top-12 left-12 right-12 bottom-0 border-t-2 border-l-2 border-white/30 rounded-tl-3xl bg-white/10 p-8">
                <div className="flex gap-2 items-end h-full">
                  <div className="w-1/4 bg-white rounded-t-sm h-[30%]"></div>
                  <div className="w-1/4 bg-white rounded-t-sm h-[50%]"></div>
                  <div className="w-1/4 bg-white rounded-t-sm h-[80%]"></div>
                  <div className="w-1/4 bg-white rounded-t-sm h-[40%]"></div>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col items-start">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Understand Your Body's Patterns</h2>
            <p className="text-xl text-black/60 leading-relaxed">
              Visualize your good and bad days over time. Spot the trends that are impossible to see in your head.
            </p>
          </div>
        </div>

        {/* Feature 4: Text L, Visual R */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Bring Better Data To Your Doctor</h2>
            <p className="text-xl text-black/60 leading-relaxed">
              Export beautiful, easy-to-read PDFs to share with your gastroenterologist or dietitian. Concrete data leads to better care.
            </p>
          </div>
          <div className="bg-white rounded-[2rem] shadow-sm border border-black/5 aspect-square overflow-hidden flex items-center justify-center p-8">
            <img 
               src="/__mockup/images/darmi-data.png" 
               alt="Data UI" 
               className="w-full h-full object-contain mix-blend-multiply"
               onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white border-y border-black/5 py-24 px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-16 max-w-xl">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12">
            
            <div className="flex flex-col gap-4 border-b border-black/10 pb-8">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Do I need to make an account?</span>
                <span className="text-[#D8836A]">›</span>
              </div>
              <p className="text-black/60 leading-relaxed">
                No. Darmi is 100% on-device. We don't have servers or user accounts. You just download the app and start using it instantly.
              </p>
            </div>

            <div className="flex flex-col gap-4 border-b border-black/10 pb-8">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Does it have a food database to scan barcodes?</span>
                <span className="text-[#D8836A]">›</span>
              </div>
              <p className="text-black/60 leading-relaxed">
                No, and this is intentional. Large food databases are slow and bloated. Darmi uses a custom tagging system so you can log "Lunch" or "Spicy Curry" in 2 seconds instead of searching for exact calorie counts.
              </p>
            </div>

            <div className="flex flex-col gap-4 border-b border-black/10 pb-8">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Can I export my data for my doctor?</span>
                <span className="text-[#D8836A]">›</span>
              </div>
              <p className="text-black/60 leading-relaxed">
                Yes. You can generate clean, structured PDF reports covering custom date ranges, showing exactly what you ate and your resulting symptoms.
              </p>
            </div>

            <div className="flex flex-col gap-4 border-b border-black/10 pb-8">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Is it actually free?</span>
                <span className="text-[#D8836A]">›</span>
              </div>
              <p className="text-black/60 leading-relaxed">
                Yes. The core tracking experience is completely free with no ads. We may introduce premium themes or advanced export options later, but your basic diary will always be free.
              </p>
            </div>

            <div className="flex flex-col gap-4 border-b border-black/10 pb-8">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Who made this?</span>
                <span className="text-[#D8836A]">›</span>
              </div>
              <p className="text-black/60 leading-relaxed">
                Darmi is built by a small independent team who were frustrated by the cluttered, ad-filled, and privacy-invasive IBS trackers on the market.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col items-start gap-2">
          <div className="text-3xl font-bold tracking-tight">Darmi.</div>
          <div className="text-sm text-black/50 font-medium">© {new Date().getFullYear()} Darmi App. All rights reserved.</div>
        </div>
        
        <div className="flex flex-col items-start md:items-end gap-2 text-sm font-semibold">
          <a href="mailto:darmi.feedback@gmail.com" className="hover:text-[#D8836A] transition-colors">darmi.feedback@gmail.com</a>
          <div className="flex gap-6 text-black/50 mt-2">
            <a href="#" className="hover:text-[#1a1a1a] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#1a1a1a] transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
