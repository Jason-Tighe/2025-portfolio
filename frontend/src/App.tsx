import './App.css'
import { useEffect, useRef, useState } from 'react';
import AboutMe from './pages/AboutMe';


export default function App() {
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app min-h-screen font-sans text-gray-800">
      <nav
      className={`fixed top-0 left-0 right-0 bg-white shadow-md p-4 flex justify-center gap-8 text-sm font-medium text-gray-600 transition-transform duration-500 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      }`}
      >
      <a href="#about" className="hover:text-gray-900 hover:underline">About</a>
      <a href="#projects" className="hover:text-gray-900 hover:underline">Projects</a>
      <a href="#contact" className="hover:text-gray-900 hover:underline">Contact</a>
      </nav>

      <main className="pt-6">
      <section id="about" className="min-h-screen p-10 flex flex-col items-center bg-gray-50">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900">About Me</h1>
        <p className="max-w-2xl text-center text-gray-700 leading-relaxed">
        </p>
        <AboutMe />
      </section>

      <section id="projects" className="min-h-screen p-8 bg-white flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        </div>
      </section>

      <section id="contact" className="min-h-screen p-8 bg-gray-50 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact</h2>
        <p className="text-gray-700 mb-4">
        </p>
        <div className="flex gap-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Resume</a>
        </div>
      </section>
      </main>
    </div>
  );

}