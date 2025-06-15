import Hero from "@/components/hero"
import MenuSection from "@/components/menu-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
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
      <Footer />
    </div>
  )
}
