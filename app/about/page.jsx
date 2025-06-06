import Image from "next/image"
import Navbar from "@/components/navbar"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="bg-amber-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">Our story, mission, and passion for authentic Ethiopian cuisine</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-amber-800">Our Story</h2>
            <p className="mb-4">
              Bole Ethiopian Restaurant was founded in 2010 by Chef Abebe Kebede, who wanted to bring the authentic
              flavors of his homeland to a new audience. Named after the vibrant Bole district in Addis Ababa, our
              restaurant captures the essence of Ethiopian hospitality and culinary tradition.
            </p>
            <p>
              What started as a small family business has grown into a beloved culinary destination, known for our
              commitment to authentic recipes, fresh ingredients, and a warm, welcoming atmosphere that makes every
              guest feel like family.
            </p>
          </div>
          <div className="relative h-80 md:h-96">
            <Image
              src="/images/chef.jpg"
              alt="Chef preparing Ethiopian cuisine"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:flex-row-reverse">
          <div className="md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-amber-800">Our Cuisine</h2>
            <p className="mb-4">
              Ethiopian cuisine is known for its rich flavors, unique spices, and communal dining experience. At the
              heart of our menu is injera, a sourdough flatbread that serves as both plate and utensil for the various
              stews and dishes we offer.
            </p>
            <p>
              We take pride in our berbere spice blend, which is made in-house according to a family recipe passed down
              through generations. Our menu features both traditional meat dishes like Doro Wat and Kitfo, as well as a
              wide variety of vegetarian and vegan options that showcase the diversity of Ethiopian cuisine.
            </p>
          </div>
          <div className="relative h-80 md:h-96 md:order-1">
            <Image
              src="/images/restaurant-interior.jpg"
              alt="Traditional Ethiopian dishes"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-amber-800">Our Promise</h2>
          <p className="mb-8">
            At Bole, we promise to deliver an authentic Ethiopian dining experience that honors tradition while
            welcoming all to our table. We source the freshest ingredients, prepare our dishes with care and attention
            to detail, and serve them in the spirit of Ethiopian hospitality.
          </p>
          <a
            href="/reservation"
            className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Reserve a Table
          </a>
        </div>
      </div>

      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Abebe Kebede",
                role: "Founder & Head Chef",
                bio: "With over 30 years of culinary experience, Chef Abebe brings authentic Ethiopian flavors to every dish.",
                image: "/images/chef.jpg",
              },
              {
                name: "Tigist Haile",
                role: "Restaurant Manager",
                bio: "Tigist ensures that every guest has an exceptional dining experience from the moment they walk in.",
                image: "/images/chef.jpg",
              },
              {
                name: "Dawit Mengistu",
                role: "Sous Chef",
                bio: "Trained in Addis Ababa, Dawit specializes in traditional vegetarian Ethiopian dishes.",
                image: "/images/chef.jpg",
              },
            ].map((person, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{person.name}</h3>
                <p className="text-amber-800 mb-3">{person.role}</p>
                <p className="text-gray-600">{person.bio}</p>
              </div>
            ))}
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
