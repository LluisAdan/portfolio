import { useState } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'
import LluisPhoto from '/src/assets/profile/Lluís_perfil.jpg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinkClass =
    "relative p-2 cursor-pointer font-semibold text-slate-300 hover:text-sky-300 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-lg after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0 after:-translate-x-1/2 after:bg-gradient-to-r after:from-sky-300/30 after:via-sky-300/80 after:to-sky-300/30 after:transition-all after:duration-200 hover:after:w-full"
    
  return (
    <nav className="w-full bg-slate-950/85 border-b border-slate-800 px-6 flex justify-between items-center fixed top-0 z-50 backdrop-blur-md shadow-md shadow-black/20">
      <div className="flex justify-around items-center space-x-3 py-3">
        <div className="mr-3 rounded-full p-[2px] bg-gradient-to-br from-sky-300/60 via-sky-300/20 to-transparent shadow-lg shadow-sky-300/10">
          <img
            className="rounded-full w-12 h-12 object-cover bg-slate-900"
            src={LluisPhoto}
            alt="Photo"
          />
        </div>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer font-bold text-lg text-slate-100 hover:text-sky-300 transition-colors duration-200"
        >
          LLUÍS ADÁN
        </Link>
      </div>

      <div className="hidden md:flex space-x-6 lg:space-x-8">
        <div className="w-24 flex justify-center items-center">
          <Link 
            to="about" 
            smooth={true}
            duration={500}
            spy={true}
            hashSpy={true}
            spyThrottle={50}
            offset={-90}
            activeClass="text-sky-300 after:w-full"
            className={navLinkClass}          
          >
            SOBRE MÍ
          </Link>
        </div>
        <div className="w-24 flex justify-center items-center">
          <Link 
            to="projects" 
            smooth={true}
            duration={500}
            spy={true}
            hashSpy={true}
            spyThrottle={50}
            offset={-90}
            activeClass="text-sky-300 after:w-full"
            className={navLinkClass}          
          >
            PROYECTOS
          </Link>
        </div>
        <div className="w-24 flex justify-center items-center">
          <Link 
            to="contact" 
            smooth={true}
            duration={500}
            spy={true}
            hashSpy={true}
            spyThrottle={50}
            offset={-90}
            activeClass="text-sky-300 after:w-full"
            className={navLinkClass}          
          >
            CONTACTO
          </Link>
        </div>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-slate-200 hover:text-sky-300 transition-colors duration-200 focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[73px] left-0 bg-slate-950/95 border-b border-slate-800 w-full flex flex-col items-center space-y-4 py-4 shadow-lg md:hidden backdrop-blur-md">
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-90}
            activeClass="text-sky-300 after:w-full"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            ABOUT
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-90}
            activeClass="text-sky-300 after:w-full"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            PROJECTS
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-90}
            activeClass="text-sky-300 after:w-full"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  )
}