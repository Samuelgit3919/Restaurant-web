import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-amber-800 text-white py-12 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-slide-in-left">
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <p>Monday - Friday: 11am - 9pm</p>
            <p>Saturday - Sunday: 10am - 10pm</p>
          </div>
          <div className="animate-fade-in-up animate-stagger-2">
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p>2200 S Jackson St, Seattle</p>
            <p>WA 98144</p>
            <p>Phone: 206-475-5034</p>
          </div>
          {/* <div className="animate-slide-in-right">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-amber-300 transition-all duration-300 hover:scale-110">
                  Instagram
                </a>
                <a href="#" className="hover:text-amber-300 transition-all duration-300 hover:scale-110">
                  Facebook
                </a>
                <a href="#" className="hover:text-amber-300 transition-all duration-300 hover:scale-110">
                  Twitter
                </a>
              </div>
            </div> */}
        </div>
        <div className="mt-8 text-center animate-fade-in-up animate-stagger-4">
          <p>
            © {new Date().getFullYear()} Gojjo Ethiopian Bar, Cafe & Restaurant. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer