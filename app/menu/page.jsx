import { menuData } from "@/lib/menu-data"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MenuSection from "@/components/menu-section"
// import { Footer } from "react-day-picker"

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

      <Footer />
    </div>
  )
}
