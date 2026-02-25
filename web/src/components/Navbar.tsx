import { useState } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'
import LluisPhoto from '/src/assets/profile/LluisFoto.jpg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinkClass =
    "p-2 cursor-pointer font-semibold text-slate-300 hover:text-sky-400 transition-colors duration-200"

  return (
    <nav className="w-full bg-slate-950/85 border-b border-slate-800 px-6 flex justify-between items-center fixed top-0 z-50 backdrop-blur-md shadow-md shadow-black/20">
      <div className="flex justify-around items-center space-x-3 py-3">
        <img
          className="border-2 border-sky-500/70 rounded-full w-12 h-12 mr-3 object-cover"
          src={LluisPhoto}
          alt="Photo"
        />
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer font-bold text-lg text-slate-100 hover:text-sky-400 transition-colors duration-200"
        >
          LLUÍS ADÁN
        </Link>
      </div>

      <div className="hidden md:flex space-x-6 lg:space-x-8">
        <div className="w-24 flex justify-center items-center">
          <Link to="about" smooth={true} duration={500} className={navLinkClass}>
            ABOUT
          </Link>
        </div>
        <div className="w-24 flex justify-center items-center">
          <Link to="projects" smooth={true} duration={500} className={navLinkClass}>
            PROJECTS
          </Link>
        </div>
        <div className="w-24 flex justify-center items-center">
          <Link to="contact" smooth={true} duration={500} className={navLinkClass}>
            CONTACT
          </Link>
        </div>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-slate-200 hover:text-sky-400 transition-colors duration-200 focus:outline-none"
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
            onClick={() => setIsOpen(false)}
            className="cursor-pointer font-semibold text-slate-200 hover:text-sky-400 transition-colors duration-200"
          >
            ABOUT
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer font-semibold text-slate-200 hover:text-sky-400 transition-colors duration-200"
          >
            PROJECTS
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer font-semibold text-slate-200 hover:text-sky-400 transition-colors duration-200"
          >
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  )
}