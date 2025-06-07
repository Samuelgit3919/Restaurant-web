"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    message: "",
    type: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: "Please fill out all required fields.",
        type: "error",
      })
      return
    }

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        message: "Thank you for your message! We'll get back to you soon.",
        type: "success",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="bg-amber-800 md:mx-12 lg:mx-24 xl:mx-40 my-16 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions or to make a reservation.
          </p>
        </div>
      </div>

      <div className="container md:mx-12 px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-amber-800">Get in Touch</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Reservation</option>
                    <option value="catering">Catering</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                ></textarea>
              </div>

              {formStatus.message && (
                <div
                  className={`p-4 rounded-md ${formStatus.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                >
                  {formStatus.message}
                </div>
              )}

              <button
                type="submit"
                className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-md font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-amber-800">Information</h2>

            <div className="bg-amber-50 p-6 rounded-lg mb-8">
              <div className="flex items-start mb-6">
                <MapPin className="text-amber-800 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Address</h3>
                  <p>123 Ethiopian Way</p>
                  <p>Addis Ababa, ET 12345</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <Phone className="text-amber-800 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p>(123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <Mail className="text-amber-800 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p>info@boleethiopian.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-amber-800 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Hours</h3>
                  <p>Monday - Friday: 11am - 10pm</p>
                  <p>Saturday - Sunday: 10am - 11pm</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg h-80 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172152.9619070271!2d-122.50494806961721!3d47.60882796629672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA%2C%20USA!5e0!3m2!1sen!2set!4v1749285748457!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

          </div>
        </div>
      </div>

      <footer className="bg-amber-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p>Monday - Friday: 11am - 10pm</p>
              <p>Saturday - Sunday: 10am - 11pm</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p>123 Ethiopian Way</p>
              <p>Addis Ababa, ET 12345</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-amber-300">
                  Instagram
                </a>
                <a href="#" className="hover:text-amber-300">
                  Facebook
                </a>
                <a href="#" className="hover:text-amber-300">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>© {new Date().getFullYear()} Bole Ethiopian Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
