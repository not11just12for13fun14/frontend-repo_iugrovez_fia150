import React from "react";

const features = [
  {
    title: "Személyre szabott",
    desc: "A születési dátumod alapján készülő numerológiai portré.",
  },
  {
    title: "Asztrológiai hangulat",
    desc: "Finom csillagképek és misztikus színek kísérik az élményt.",
  },
  { title: "Digitális és fizikai", desc: "E-könyv és prémium nyomtatott kiadás is elérhető." },
  { title: "Azonnali generálás", desc: "Megrendelés után automatikus előnézet és letöltés." },
];

const Features = () => {
  return (
    <section className="relative py-20" id="jellemzok">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white/90 hover:bg-white/10 transition"
            >
              <div className="text-fuchsia-300 font-semibold mb-2">{f.title}</div>
              <div className="text-indigo-100/90 text-sm leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
