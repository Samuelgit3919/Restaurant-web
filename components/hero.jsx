import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative h-[500px] w-full contain overflow-hidden">
      <Image
        src="/images/back.jpg"
        alt="Ethiopian cuisine with injera and various dishes"
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 animate-fade-in-up">
          Authentic Ethiopian Cuisine
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl animate-fade-in-up animate-stagger-2">
          Experience the rich flavors and traditions of Ethiopia
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-stagger-3">
          <a
            href="/menu"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95 animate-pulse-glow"
          >
            View Menu
          </a>
          <a
            href="/reservation"
            className="bg-white hover:bg-gray-100 text-amber-800 px-8 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95"
          >
            Make Reservation
          </a>
        </div>
      </div>
    </div>
  )
}
