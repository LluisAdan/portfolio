import { useState } from "react"

type FormData = {
  name: string
  email: string,
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3000/api/v1/send', {
        method: 'POST',
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify(formData)
      })

      const result = await response.json()
      setStatus(result.message)
      setFormData({ name: '', email: '', message: '' })
    
    } catch (error) {
      setStatus("Send message error")
    }

  }

  return (
    <div id="contact" className="w-full bg-slate-100 flex flex-col items-center py-20">
      <div className="flex flex-col items-center space-y-6">
        <h1>CONTACT</h1>
        <div className="w-30 h-1 border border-teal-600 rounded-2xl bg-teal-600"></div>
        <p className="text-center mt-2">Feel free to contact me</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-slate-200 mt-20 mx-10 border p-10 space-y-10">
        <div className="w-full space-y-2">
          <label htmlFor="name" className="block font-medium">Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-200 h-10 bg-slate-100 p-2"
          />
        </div>

        <div className="w-full space-y-2">
          <label htmlFor="email" className="block font-medium">Email</label>
          <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="w-200 h-10 bg-slate-100 p-2"
          />
        </div>
        
        <div className="w-full space-y-2">
          <label htmlFor="message" className="block font-medium">Message</label>
          <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          required
          className="w-200 h-10 bg-slate-100 p-2 resize-none h-50"
          ></textarea>
        </div>

        <div className="w-full flex justify-end">
          <div className="w-20 h-10 flex justify-center items-center">
            <button
              type="submit"
              className="p-2 text-1xl cursor-pointer border-2 rounded-2xl hover:text-white hover:bg-teal-700 border-slate-200 border-y-slate-500 hover:border-teal-700 hover:text-sm"
            >
              SUBMIT
            </button>  
          </div>
        </div>
      </form>

      {status && <p className="mt-4 text-center">{status}</p>}

    </div>
  )
}
