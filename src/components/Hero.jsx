import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.04),transparent_45%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-200/80 mb-4">
          Spirituális asztrológiai sablon
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_2px_24px_rgba(168,85,247,0.25)]">
          Sorskönyv
        </h1>
        <p className="mt-5 text-lg md:text-xl text-indigo-100/90 max-w-2xl mx-auto">
          Személyre szabott numerológiai elemzések egy időtlen könyvben. Varázslatos hangulat, modern élmény, minden eszközön gyönyörűen.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#vasarlas" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:from-fuchsia-500 hover:to-indigo-500 transition">
            Vásárlás
          </a>
          <a href="#konyv" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 text-white/90 font-medium backdrop-blur border border-white/10 hover:bg-white/15 transition">
            Nézd meg a könyvet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
