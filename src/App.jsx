import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Component } from 'react'
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Education from './components/Education';
import AdditionalDetails from './components/Additional Details';

export default function App() {
  return (
<main className="bg-[#0b1426] text-white">

  <Navbar />

  <section id="home" className="py-16 md:py-24">
    <div className="mx-auto max-w-7xl px-6">
      <Hero />
    </div>
  </section>

  <section id="projects" className="border-t border-white/5 py-24">
    <div className="mx-auto max-w-6xl px-6">
      <Projects />
    </div>
  </section>

  <section id="skills" className="border-t border-white/5 py-24">
    <div className="mx-auto max-w-6xl px-6">
      <Skills />
    </div>
  </section>

  <section id="experience" className="border-t border-white/5 py-24">
    <div className="mx-auto max-w-6xl px-6">
      <Experience />
    </div>
  </section>

  <section id="education" className="border-t border-white/5 py-24">
    <div className="mx-auto max-w-6xl px-6">
      <Education />
    </div>
  </section>

   <section id="additional" className="border-t border-white/5 py-24">
    <div className="mx-auto max-w-6xl px-6">
      <AdditionalDetails />
    </div>
  </section>

  <section id="about" className="border-t border-white/5 py-24">
    <div className="mx-auto max-w-6xl px-6">
      <About />
    </div>
  </section>

</main>
  );
}
