import { useState } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'
import LluisPhoto from '/src/assets/profile/LluisFoto.jpg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-slate-50 border-b border-slate-200 px-6 flex justify-between items-center fixed top-0 z-50 shadow-md">
      <div className="flex justify-around items-center space-x-3 py-3">
        <img className="border-2 border-teal-700 rounded-full w-12 h-12 mr-3 object-cover" src={LluisPhoto} alt="Photo" />
        <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer font-bold text-lg hover:text-teal-700">
            LLUÍS ADÁN
          </Link>
      </div>

      <div className="hidden md:flex space-x-10">
        <div className="w-20 flex justify-center items-center">
          <Link to="about" smooth={true} duration={500} className="p-2 cursor-pointer font-bold hover:text-teal-700 hover:border-2 hover:rounded-2xl hover:border-slate-50 hover:border-y-teal-700 hover:text-sm">ABOUT</Link>
        </div>
        <div className="w-20 flex justify-center items-center">
          <Link to="projects" smooth={true} duration={500} className="p-2 cursor-pointer font-bold hover:text-teal-700 hover:border-2 hover:rounded-2xl hover:border-slate-50 hover:border-y-teal-700 hover:text-sm">PROJECTS</Link>
        </div>
        <div className="w-20 flex justify-center items-center">
          <Link to="contact" smooth={true} duration={500} className="p-2 cursor-pointer font-bold hover:text-teal-700 hover:border-2 hover:rounded-2xl hover:border-slate-50 hover:border-y-teal-700 hover:text-sm">CONTACT</Link>
        </div>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 right-0 bg-white w-full flex flex-col items-center space-y-4 py-4 shadow-lg md:hidden">
          <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="cursor-pointer font-bold hover:text-teal-700">ABOUT</Link>
          <Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="cursor-pointer font-bold hover:text-teal-700">PROJECTS</Link>
          <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="cursor-pointer font-bold hover:text-teal-700">CONTACT</Link>
        </div>
      )}

    </nav>
  )
}
