import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="bg-amber-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Gojjo Bar, Cafe, & Restaurant</h1>
          <p className="text-xl max-w-2xl mx-auto">A unique blend of Ethiopian tradition, cozy ambiance, and exceptional flavors — crafted for unforgettable dining experiences.</p>
        </div>
      </div>

      <div className="md:mx-12 lg:mx-24 xl:mx-40  mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-amber-800">Our Journey</h2>
            <p className="mb-4">
              Gojjo Bar, Cafe, & Restaurant was born from a desire to create a space where culture, flavor, and community unite. Founded in the heart of Addis Ababa by a passionate team of food lovers and hospitality experts, Gojjo represents the traditional Ethiopian home — a place where warmth and generosity welcome every guest.
            </p>
            <p>
              What began as a small family-run cafe quickly blossomed into a beloved local destination, known not only for its deliciously authentic dishes but also for its inviting atmosphere that feels like home to all who walk through our doors. Today, Gojjo stands as a symbol of Ethiopian pride — offering unforgettable moments over coffee, cocktails, and carefully prepared meals.
            </p>
          </div>
          <div className="relative h-80 md:h-96">
            <Image
              src="/images/chef.jpg"
              alt="Chef preparing Ethiopian cuisine at Gojjo"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:flex-row-reverse">
          <div className="md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-amber-800">A Taste of Ethiopia</h2>
            <p className="mb-4">
              At Gojjo, we celebrate the richness of Ethiopian cuisine — a culinary tradition that’s as vibrant and diverse as its people. Our menu features an array of signature dishes crafted from time-honored recipes, including the beloved injera served alongside aromatic stews, spiced meats, and hearty vegetarian options.
            </p>
            <p>
              Whether it’s the fiery kick of our house-made berbere or the comforting warmth of freshly roasted Ethiopian coffee, every bite and sip at Gojjo reflects the soul of our culture. From casual lunches to festive dinners and relaxing coffee moments, Gojjo is a destination where flavor tells a story.
            </p>
          </div>
          <div className="relative h-80 md:h-96 md:order-1">
            <Image
              src="/images/restaurant-interior.jpg"
              alt="Interior view of Gojjo Bar, Cafe, & Restaurant"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-amber-800">Our Commitment</h2>
          <p className="mb-8">
            At Gojjo Bar, Cafe, & Restaurant, our promise is simple: to offer an authentic Ethiopian dining and social experience marked by exceptional hospitality and unwavering quality. We carefully select the finest local ingredients, uphold traditional cooking methods, and foster an environment where every guest feels valued and appreciated.
          </p>
          <a
            href="/reservation"
            className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Reserve Your Experience
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}
