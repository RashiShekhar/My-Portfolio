import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import AdditionalDetails from './components/Additional Details';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-violet-500/30 selection:text-violet-200">
      
      {/* Background Decorative Gradients & Mesh */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Subtle Top Center Glow */}
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[130px]" />
        {/* Subtle Mid-page Indigo Accent */}
        <div className="absolute top-[45%] -left-40 h-[600px] w-[600px] rounded-full bg-indigo-600/5 blur-[150px]" />
        {/* Subtle Bottom Violet Accent */}
        <div className="absolute -bottom-40 right-0 h-[600px] w-[600px] rounded-full bg-violet-600/5 blur-[150px]" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative flex flex-col divide-y divide-slate-800/60">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <AdditionalDetails />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}