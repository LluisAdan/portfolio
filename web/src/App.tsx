import ContactForm from "./components/ContactForm"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import LinkedinPhoto from './assets/logos/linkedin.png'
import GithubPhoto from './assets/logos/github.png'
import { Link } from 'react-scroll'
import { motion, useInView } from "framer-motion"
import { useRef } from "react"


function App() {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true }) 

  const btnPrimary = "cursor-pointer inline-flex items-center justify-center px-6 py-2.5 text-lg md:text-xl font-semibold rounded-2xl border border-sky-500/40 bg-slate-900/60 text-slate-100 hover:bg-sky-500/20 hover:border-sky-400 hover:text-white transition-all duration-200 shadow-lg shadow-sky-500/10 backdrop-blur-sm"

  return (
  <div className="font-sans bg-slate-950 text-slate-100 min-h-screen">

    <Navbar />

    <main className="pt-18">
      <div
        className="relative bg-cover bg-center p-10 md:p-20 lg:p-40 text-center flex flex-col items-center overflow-hidden"
        style={{ backgroundImage: "url('/img/Fondo_porfolio.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950"></div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 max-w-4xl leading-tight tracking-tight"
          > 
            Find out who I am and what I can bring to the world of web development
          </motion.h1>

          <motion.div
            className="relative z-10 flex justify-center items-center mt-12 md:mt-14"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className={btnPrimary}
            >
            PROJECTS
            </Link>
          </motion.div>
        </div>

        <div 
          id="about" 
          className="bg-slate-900 space-y-5 py-20 px-4 md:px-10 border-t border-slate-800"
        >
          <div className="w-full max-w-6xl mx-auto">
            <motion.div
              ref={ref}
              className="flex flex-col items-center space-y-6 text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h1>I'm Lluis Adan</h1>
              <div className="w-30 h-1 border border-sky-500 rounded-2xl bg-sky-500"></div>
              <p className="mt-2 text-center text-slate-400 text-xl">Want to know more about me?</p>
            </motion.div>
            
            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10 mt-12 mx-auto max-w-6xl">
              <motion.div
                className="w-full md:w-1/2 p-4 md:p-5"
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4">From infrastructure to code</h2>
                <p className="text-slate-300 leading-relaxed">
                  I'm a Full Stack Developer with experience in JavaScript (ES6) and ReactJS, combined with a solid background as a systems technician.
                </p>
                <p className="text-slate-300 mt-4 leading-relaxed">
                  Thanks to this background, I not only develop efficient applications, but I also understand the infrastructure that supports them, from servers to network configurations.
                </p>
                <p className="text-slate-300 mt-4 leading-relaxed">
                  I am passionate about technology and the challenges it brings. I consider myself a resolute, proactive and constantly learning person, always exploring new tools and trends to improve my skills and provide innovative solutions.
                </p>
              </motion.div>
              <div className="w-full md:w-1/2 p-4 md:p-5">
                <h2 className="mb-4">My Skills</h2>
                <div className="flex flex-wrap gap-2.5 select-none">
                {["HTML", "CSS", "JavaScript", "React", "Node", "Express", "MongoDB", "Git", "Github", "Docker", "Tailwind CSS", "Bootstrap", "Responsive"].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.10 }}
                    className="cursor-default bg-slate-800 border border-slate-700 text-slate-200 h-10 rounded-xl px-4 flex items-center justify-center text-sm hover:border-sky-500/50 hover:bg-slate-700 transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      <Project />
      <ContactForm />
    </main>

    <footer className="w-full bg-slate-950 border-t border-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-6 gap-4">
        <div className="text-slate-100 flex flex-col items-center md:items-start text-center md:text-left mt-4">
          <h3>LLUIS ADAN</h3>
          <p className="text-xs text-slate-400">Full Stack Developer</p>
        </div>

        <div className="text-slate-100 mt-4">
          <h3 className="text-center">SOCIAL</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://linkedin.com/in/lluis-adan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-slate-800 bg-slate-900 hover:border-sky-500/40 transition-colors duration-200"
            >
              <img
                className="w-8 md:w-10 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-200"
                src={LinkedinPhoto}
                alt="Lluis Adan Linkedin Profile"
              />
            </a>

            <a
              href="https://github.com/LluisAdan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-slate-800 bg-slate-900 hover:border-sky-500/40 transition-colors duration-200"
            >
              <img
                className="w-8 md:w-10 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-200"
                src={GithubPhoto}
                alt="Lluís Adán Github Profile"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 text-slate-300 text-center text-xs border-t border-slate-800">
        <p>&copy; Copyright 2026. Made by <u>Lluís Adán</u></p>
      </div>
    </footer>
  </div>
  )
}

export default App