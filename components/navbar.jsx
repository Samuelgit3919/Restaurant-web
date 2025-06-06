"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`bg-amber-800 text-white sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg backdrop-blur-sm bg-amber-800/95" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center animate-fade-in">
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-bold transition-transform duration-300 group-hover:scale-105">Bole</span>
              <span className="bg-white text-amber-800 p-1 rounded ml-1 text-xs transition-all duration-300 group-hover:bg-amber-100 animate-pulse-glow">
                ET
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 animate-fade-in-down">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
              { href: "/menu", label: "Menu" },
              { href: "/reservation", label: "Reservation" },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-amber-300 transition-all duration-300 hover:scale-105 relative group animate-fade-in-down animate-stagger-${index + 1}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden animate-fade-in">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 transition-transform duration-300 hover:scale-110 active:scale-95"
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute transition-all duration-300 ${
                    isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute transition-all duration-300 ${
                    isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-amber-800 pb-4">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
              { href: "/menu", label: "Menu" },
              { href: "/reservation", label: "Reservation" },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2 hover:text-amber-300 transition-all duration-300 hover:translate-x-2 transform ${
                  isMenuOpen ? `animate-slide-in-left animate-stagger-${index + 1}` : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
