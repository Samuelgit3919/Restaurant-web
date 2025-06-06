import { menuData } from "@/lib/menu-data"
import Navbar from "@/components/navbar"
import MenuSection from "@/components/menu-section"

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="bg-amber-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover the authentic flavors of Ethiopia with our traditional dishes
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Menu Navigation */}
        <div className="sticky top-16 bg-white z-40 py-4 border-b mb-8">
          <div className="flex overflow-x-auto gap-4 pb-2 hide-scrollbar">
            {menuData.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-amber-800 hover:text-amber-600 whitespace-nowrap font-medium px-2"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>

        {/* Menu Sections */}
        <div className="grid gap-16">
          {menuData.map((section) => (
            <MenuSection key={section.id} section={section} />
          ))}
        </div>
      </div>

      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Ethiopian Cuisine?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable dining experience with authentic flavors and warm hospitality.
          </p>
          <a
            href="/reservation"
            className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Make a Reservation
          </a>
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
