import React from "react";

const Pricing = () => {
  return (
    <section id="vasarlas" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 text-white/90">
            <div className="text-sm text-fuchsia-300 font-semibold">Digitális</div>
            <div className="mt-2 text-3xl font-bold text-white">Sorskönyv e-könyv</div>
            <p className="mt-2 text-indigo-100/90">Azonnali hozzáférés, letölthető PDF, személyre szabott tartalommal.</p>
            <div className="mt-6 text-4xl font-extrabold">6 900 Ft</div>
            <button className="mt-6 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:from-fuchsia-500 hover:to-indigo-500 transition">
              Megveszem
            </button>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 text-white/90">
            <div className="text-sm text-indigo-300 font-semibold">Prémium nyomtatott</div>
            <div className="mt-2 text-3xl font-bold text-white">Sorskönyv könyv</div>
            <p className="mt-2 text-indigo-100/90">Keménytáblás kiadás, selyemszalag, minőségi papír – ajándéknak is tökéletes.</p>
            <div className="mt-6 text-4xl font-extrabold">14 900 Ft</div>
            <button className="mt-6 w-full px-6 py-3 rounded-xl bg-white/10 text-white/90 font-medium backdrop-blur border border-white/10 hover:bg-white/15 transition">
              Megrendelem
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
