import Hero from "@/components/hero"
import MenuSection from "@/components/menu-section"
import Navbar from "@/components/navbar"
import { menuData } from "@/lib/menu-data"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">Signature Dishes</h2>
        <div className="grid gap-16">
          {menuData.map((section, index) => (
            <div key={section.id} className={`animate-fade-in-up animate-stagger-${(index % 4) + 1}`}>
              <MenuSection section={section} />
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-amber-800 text-white py-12 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-slide-in-left">
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p>Monday - Friday: 11am - 10pm</p>
              <p>Saturday - Sunday: 10am - 11pm</p>
            </div>
            <div className="animate-fade-in-up animate-stagger-2">
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p>123 Ethiopian Way</p>
              <p>Addis Ababa, ET 12345</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div className="animate-slide-in-right">
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
            </div>
          </div>
          <div className="mt-8 text-center animate-fade-in-up animate-stagger-4">
            <p>© {new Date().getFullYear()} Bole Ethiopian Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
