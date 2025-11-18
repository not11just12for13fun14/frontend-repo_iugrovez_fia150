import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import BookShowcase from './components/BookShowcase'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-extrabold tracking-wide text-white">Sorskönyv</div>
          <nav className="hidden sm:flex gap-6 text-sm text-white/80">
            <a href="#jellemzok" className="hover:text-white">Jellemzők</a>
            <a href="#konyv" className="hover:text-white">Könyv</a>
            <a href="#vasarlas" className="hover:text-white">Vásárlás</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <BookShowcase />
        <Pricing />
      </main>

      <footer className="py-12 text-center text-white/60">
        © {new Date().getFullYear()} Sorskönyv – numerológiai és asztrológiai élmény.
      </footer>
    </div>
  )
}

export default App
