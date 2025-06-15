"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Calendar, Users, Phone, Mail, MessageSquare } from "lucide-react"
// import { Footer } from "react-day-picker"


export default function ReservationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    partySize: 2,
    occasion: "",
    specialRequests: "",
  })

  const [formStatus, setFormStatus] = useState({
    message: "",
    type: null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const timeSlots = [
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
  ]

  const occasions = [
    "Birthday",
    "Anniversary",
    "Date Night",
    "Business Meeting",
    "Family Gathering",
    "Celebration",
    "Other",
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "partySize" ? Number.parseInt(value) : value,
    }))
  }

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.date ||
      !formData.time
    ) {
      setFormStatus({
        message: "Please fill out all required fields.",
        type: "error",
      })
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        message: "Please enter a valid email address.",
        type: "error",
      })
      setIsSubmitting(false)
      return
    }

    // Date validation (must be today or future)
    const selectedDate = new Date(formData.date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (selectedDate < today) {
      setFormStatus({
        message: "Please select a date that is today or in the future.",
        type: "error",
      })
      setIsSubmitting(false)
      return
    }

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setFormStatus({
        message: `Thank you ${formData.firstName}! Your reservation for ${formData.partySize} people on ${formData.date} at ${formData.time} has been confirmed. We'll send a confirmation email to ${formData.email}.`,
        type: "success",
      })

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        partySize: 2,
        occasion: "",
        specialRequests: "",
      })
    } catch (error) {
      setFormStatus({
        message: "Sorry, there was an error processing your reservation. Please try again or call us directly.",
        type: "error",
      })
    }

    setIsSubmitting(false)
  }

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split("T")[0]

  return (
    <div className="min-h-screen bg-white ">
      <Navbar />
      <div className="bg-amber-800 text-white py-16 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Make a Reservation</h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in-up animate-stagger-2">
            Reserve your table for an authentic Ethiopian dining experience
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-8 text-amber-800">Reservation Details</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="animate-fade-in-up animate-stagger-1">
                    <label htmlFor="firstName" className="block mb-2 font-medium">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onFocus={() => handleFocus("firstName")}
                      onBlur={handleBlur}
                      className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 ${focusedField === "firstName" ? "transform scale-105 shadow-lg" : ""
                        }`}
                      required
                    />
                  </div>
                  <div className="animate-fade-in-up animate-stagger-2">
                    <label htmlFor="lastName" className="block mb-2 font-medium">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onFocus={() => handleFocus("lastName")}
                      onBlur={handleBlur}
                      className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 ${focusedField === "lastName" ? "transform scale-105 shadow-lg" : ""
                        }`}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="animate-fade-in-up animate-stagger-3">
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={handleBlur}
                      className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 ${focusedField === "email" ? "transform scale-105 shadow-lg" : ""
                        }`}
                      required
                    />
                  </div>
                  <div className="animate-fade-in-up animate-stagger-4">
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => handleFocus("phone")}
                      onBlur={handleBlur}
                      className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 ${focusedField === "phone" ? "transform scale-105 shadow-lg" : ""
                        }`}
                      required
                    />
                  </div>
                </div>

                {/* Reservation Details */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="animate-fade-in-up animate-stagger-5">
                    <label htmlFor="date" className="block mb-2 font-medium">
                      Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      onFocus={() => handleFocus("date")}
                      onBlur={handleBlur}
                      min={today}
                      className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 ${focusedField === "date" ? "transform scale-105 shadow-lg" : ""
                        }`}
                      required
                    />
                  </div>
                  <div className="animate-fade-in-up animate-stagger-6">
                    <label htmlFor="time" className="block mb-2 font-medium">
                      Time <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      onFocus={() => handleFocus("time")}
                      onBlur={handleBlur}
                      className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 ${focusedField === "time" ? "transform scale-105 shadow-lg" : ""
                        }`}
                      required
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="animate-fade-in-up animate-stagger-1">
                    <label htmlFor="partySize" className="block mb-2 font-medium">
                      Party Size <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="partySize"
                      name="partySize"
                      value={formData.partySize}
                      onChange={handleChange}
                      onFocus={() => handleFocus("partySize")}
                      onBlur={handleBlur}
                      className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 ${focusedField === "partySize" ? "transform scale-105 shadow-lg" : ""
                        }`}
                      required
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((size) => (
                        <option key={size} value={size}>
                          {size} {size === 1 ? "person" : "people"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="animate-fade-in-up animate-stagger-2">
                  <label htmlFor="occasion" className="block mb-2 font-medium">
                    Occasion (Optional)
                  </label>
                  <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    onFocus={() => handleFocus("occasion")}
                    onBlur={handleBlur}
                    className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 ${focusedField === "occasion" ? "transform scale-105 shadow-lg" : ""
                      }`}
                  >
                    <option value="">Select occasion</option>
                    {occasions.map((occasion) => (
                      <option key={occasion} value={occasion}>
                        {occasion}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="animate-fade-in-up animate-stagger-3">
                  <label htmlFor="specialRequests" className="block mb-2 font-medium">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    onFocus={() => handleFocus("specialRequests")}
                    onBlur={handleBlur}
                    rows={4}
                    placeholder="Dietary restrictions, accessibility needs, seating preferences, etc."
                    className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 ${focusedField === "specialRequests" ? "transform scale-105 shadow-lg" : ""
                      }`}
                  ></textarea>
                </div>

                {formStatus.message && (
                  <div
                    className={`p-4 rounded-md transition-all duration-500 transform animate-bounce-in ${formStatus.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-amber-800 hover:bg-amber-900 disabled:bg-amber-400 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 animate-fade-in-up animate-stagger-4 ${isSubmitting ? "animate-pulse" : "hover:shadow-lg"
                    }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </span>
                  ) : (
                    "Reserve Table"
                  )}
                </button>
              </form>
            </div>

            {/* Restaurant Information */}
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-8 text-amber-800">Restaurant Information</h2>

              <div className="bg-amber-50 p-6 rounded-lg mb-8 animate-scale-in">
                <div className="flex items-start mb-6 animate-fade-in-up animate-stagger-1">
                  <Calendar className="text-amber-800 mr-4 mt-1 flex-shrink-0 animate-float" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Hours</h3>
                    <p className="mb-1">Monday - Friday: 11:00 AM - 10:00 PM</p>
                    <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start mb-6 animate-fade-in-up animate-stagger-2">
                  <Phone className="text-amber-800 mr-4 mt-1 flex-shrink-0 animate-float" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Phone</h3>
                    <p>(123) 456-7890</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Call us for same-day reservations or parties larger than 10
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6 animate-fade-in-up animate-stagger-3">
                  <Mail className="text-amber-800 mr-4 mt-1 flex-shrink-0 animate-float" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <p>reservations@boleethiopian.com</p>
                  </div>
                </div>

                <div className="flex items-start animate-fade-in-up animate-stagger-4">
                  <Users className="text-amber-800 mr-4 mt-1 flex-shrink-0 animate-float" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Group Reservations</h3>
                    <p className="text-sm text-gray-600">
                      For parties of 10 or more, please call us directly to ensure the best seating arrangement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-amber-200 p-6 rounded-lg animate-scale-in animate-stagger-2">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <MessageSquare className="text-amber-800 mr-2 animate-float" />
                  Reservation Policy
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "Reservations are held for 15 minutes past the reserved time",
                    "Cancellations must be made at least 2 hours in advance",
                    "Large parties may require a credit card to hold the reservation",
                    "We accommodate dietary restrictions with advance notice",
                    "Children are welcome - high chairs and booster seats available",
                  ].map((item, index) => (
                    <li key={index} className={`animate-fade-in-up animate-stagger-${index + 1}`}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 text-center animate-fade-in-up animate-stagger-6">
                <p className="text-gray-600 mb-4">
                  Need immediate assistance or have questions about your reservation?
                </p>
                <a
                  href="/contact"
                  className="bg-white border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-6 py-2 rounded-md font-medium transition-all duration-300 inline-block transform hover:scale-105 active:scale-95"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
