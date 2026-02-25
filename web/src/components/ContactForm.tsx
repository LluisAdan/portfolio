import { useState } from "react"
import Button from "./Button"

type FormData = {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:3000/api/v1/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      setStatus(result.message)
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setStatus("Send message error")
    }
  }

  return (
    <div
      id="contact"
      className="w-full bg-slate-900 border-t border-slate-800 py-20 px-4 sm:px-10"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h1 className="text-slate-100">CONTACT</h1>
          <div className="w-30 h-1 border border-sky-500 rounded-2xl bg-sky-500"></div>
          <p className="mt-2 text-slate-400 text-xl">Feel free to contact me</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-950 mt-10 w-full max-w-lg border border-slate-800 p-6 sm:p-10 space-y-6 rounded-2xl shadow-xl shadow-black/20"
        >
          <div className="w-full space-y-2">
            <label htmlFor="name" className="block font-medium text-slate-200">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full h-11 bg-slate-900 text-slate-100 placeholder:text-slate-500 p-3 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />
          </div>

          <div className="w-full space-y-2">
            <label htmlFor="email" className="block font-medium text-slate-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full h-11 bg-slate-900 text-slate-100 placeholder:text-slate-500 p-3 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />
          </div>

          <div className="w-full space-y-2">
            <label htmlFor="message" className="block font-medium text-slate-200">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
              className="w-full h-32 bg-slate-900 text-slate-100 placeholder:text-slate-500 p-3 border border-slate-700 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            ></textarea>
          </div>

          <div className="w-full flex justify-end">
            <Button type="submit">SUBMIT</Button>
          </div>
        </form>

        {status && (
          <p className="mt-4 text-center text-sky-400 font-medium">{status}</p>
        )}
      </div>
    </div>
  )
}