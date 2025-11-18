import React, { useEffect, useRef, useState } from "react";

// Scroll-nyitás: ahogy görgetsz, a könyv kinyílik
const BookShowcase = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress 0..1 amikor a szekció felülre ér és elhagyjuk az alját
      const start = vh * 0.9; // kicsit lejjebb indul
      const end = -rect.height * 0.1; // kicsit korábban fejeződik be
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, raw));
      setProgress(clamped);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // progress -> 0: zárt, 1: teljesen nyitott
  const leftRotation = -Math.min(0, (progress - 0.02) * 120); // bal borító kifelé
  const rightRotation = Math.min(0, (progress - 0.02) * 120); // jobb borító befelé
  const spineOpen = Math.min(1, Math.max(0, progress * 1.1));

  return (
    <section ref={containerRef} id="konyv" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(236,72,153,0.08),transparent_55%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ahogy görgeted, a Sorskönyv kinyílik</h2>
          <p className="text-indigo-100/90 mt-3">Éld át a varázslatot: a lapok felfedik a személyes üzeneteidet.</p>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative perspective-[1600px] w-full max-w-3xl h-[360px] sm:h-[420px] md:h-[480px]">
            {/* Árnyék */}
            <div className="absolute inset-x-10 bottom-10 h-10 bg-black/30 blur-2xl rounded-full" />

            {/* Könyv konténer */}
            <div className="relative w-full h-full [transform-style:preserve-3d]">
              {/* Hátsó lapok */}
              <div
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10"
                style={{ transform: `translateZ(-15px)` }}
              />

              {/* Gerinc */}
              <div
                className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-2 bg-gradient-to-b from-fuchsia-500 to-indigo-500 rounded"
                style={{ transform: `translateZ(${spineOpen * 2}px)` }}
              />

              {/* Bal borító */}
              <div
                className="absolute left-0 top-0 h-full w-1/2 origin-right [transform-style:preserve-3d]"
                style={{ transform: `rotateY(${leftRotation}deg)` }}
              >
                <div className="absolute inset-0 rounded-l-xl bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 border border-white/10" />
                <div className="absolute inset-0 rounded-l-xl mix-blend-screen bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.3),transparent_40%)]" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="text-fuchsia-300/80 text-sm tracking-widest">SORSKÖNYV</div>
                  <div className="text-white/90 text-lg">Numerológia & Asztrológia</div>
                </div>
              </div>

              {/* Jobb borító */}
              <div
                className="absolute right-0 top-0 h-full w-1/2 origin-left [transform-style:preserve-3d]"
                style={{ transform: `rotateY(${rightRotation}deg)` }}
              >
                <div className="absolute inset-0 rounded-r-xl bg-gradient-to-br from-fuchsia-900 via-slate-900 to-slate-900 border border-white/10" />
                <div className="absolute inset-0 rounded-r-xl mix-blend-screen bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.3),transparent_40%)]" />
                <div className="absolute inset-0 p-8 flex flex-col items-end justify-between text-right">
                  <div className="text-fuchsia-200/70 text-sm tracking-widest">SORSKÖNYV</div>
                  <div className="text-white/90 text-lg">Személyre szabott üzenetek</div>
                </div>
              </div>

              {/* Lapok */}
              {[...Array(6)].map((_, i) => {
                const delay = i * 0.08;
                const p = Math.max(0, Math.min(1, (progress - delay) * 1.8));
                const rot = (1 - p) * (i % 2 === 0 ? 70 : -70);
                const z = i * 2 + p * 6;
                return (
                  <div
                    key={i}
                    className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[calc(100%-2rem)] origin-left [transform-style:preserve-3d]"
                    style={{ transform: `translateZ(${z}px) rotateY(${rot}deg)` }}
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/95 to-white/80 shadow-2xl" />
                    <div className="absolute inset-0 p-8 text-slate-800/90 text-sm">
                      <div className="opacity-70">
                        {i === 0 && "„A számok nyelve a lelked térképe.”"}
                        {i === 1 && "Születési dátumod egyedi rezgéseket hordoz, amely végigkísér a sorsod útján."}
                        {i === 2 && "Az 1-es erő: kezdetek, vezetés, bátorság. Az út számától a személyes évig minden jel üzen."}
                        {i === 3 && "A 7-es bölcsesség: befelé fordulás, megértés, misztérium. A könyv ezeket bontja ki."}
                        {i === 4 && "Személyre szabott fejezetek: név, születési dátum, életút és kihívások."}
                        {i === 5 && "Zárszó: a Sorskönyv kísérőd lesz, bármerre visz az utad."}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookShowcase;
