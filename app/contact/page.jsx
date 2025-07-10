"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: "Please fill out all required fields.",
        type: "error",
      });

      // Auto-hide message after 3 seconds
      setTimeout(() => {
        setFormStatus({ message: "", type: null });
      }, 3000);

      return;
    }

    emailjs.sendForm(
      'service_wzamzdc',
      'template_s4175sd',
      formRef.current,
      'IJOxcH6Dq2lfktn2_'
    )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus({
            message: "Thank you for your message! We'll get back to you soon.",
            type: "success",
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });

          // Auto-hide message after 3 seconds
          setTimeout(() => {
            setFormStatus({ message: "", type: null });
          }, 3000);
        },
        (error) => {
          console.error(error.text);
          setFormStatus({
            message: "Failed to send your message. Please try again later.",
            type: "error",
          });

          // Auto-hide message after 3 seconds
          setTimeout(() => {
            setFormStatus({ message: "", type: null });
          }, 3000);
        }
      );
  };


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

  const sendEmail = (e) => {
    e.preventDefault()

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: "Please fill out all required fields.",
        type: "error",
      })
      return
    }
    emailjs.sendForm(
      'service_wzamzdc',     // e.g., service_123abc
      'template_s4175sd',    // e.g., template_456def
      formRef.current,
      'IJOxcH6Dq2lfktn2_'      // e.g., ZYxAbcD12345
    )
      .then(
        (result) => {
          console.log(result.text);
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
        },
        (error) => {
          console.error(error.text);
          setFormStatus({
            message: "Failed to send your message. Please try again later.",
            type: "error",
          })
        }
      )


    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        message: "Thank you for your message! We'll get back to you soon.",
        type: "success",
      })

    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <header className="bg-amber-800 w-full mt-0 mb-16 text-white py-16 px-4 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            We'd love to hear from you. Reach out with any questions or to make a reservation.
          </p>
        </div>
      </header>

      <main className="flex-1 w-full px-0 py-16">
        <div className="grid md:grid-cols-2 gap-16 w-full max-w-6xl mx-auto px-4">
          {/* Contact Form */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-amber-800">Get in Touch</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
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
                    autoComplete="name"
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
                    autoComplete="email"
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
                    autoComplete="tel"
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
                    {/* <option value="catering">Catering</option> */}
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
                  className={`p-4 rounded-md text-center transition-all duration-300 ${formStatus.type === "success"
                    ? "bg-green-100 text-green-800 border border-green-300"
                    : "bg-red-100 text-red-800 border border-red-300"
                    }`}
                >
                  {formStatus.message}
                </div>
              )}

              <button
                type="submit"
                className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-md font-semibold transition-colors shadow-md w-full"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Contact Information */}
          <aside>
            <h2 className="text-3xl font-bold mb-8 text-amber-800">WHERE WE ARE</h2>
            <div className="bg-amber-50 p-6 rounded-lg mb-8 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-800 mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="font-bold text-lg mb-1">Address</h3>
                  <address className="not-italic">
                    2200 S Jackson St, 
                    Seattle, WA 98144, USA
                  </address>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-amber-800 mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <a href="tel:206-475-5034" className="hover:underline">206-475-5034</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-amber-800 mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a href="mailto:Gojjoinfo@gmail.com" className="hover:underline">Gojjoinfo@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-amber-800 mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="font-bold text-lg mb-1">Hours</h3>
                  <p>Monday - Friday: 11am - 9pm</p>
                  <p>Saturday - Sunday: 10am - 10pm</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-80 overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.2778421695525!2d-122.30889534596602!3d47.60128691429514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ac20c110207%3A0xd3c524016fd720cf!2s2200%20S%20Jackson%20St%2C%20Seattle%2C%20WA%2098144%2C%20USA!5e0!3m2!1sen!2set!4v1749983268467!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                allowFullScreen
              ></iframe>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
