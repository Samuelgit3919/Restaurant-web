import Image from "next/image"

export default function MenuSection({ section }) {
  return (
    <section id={section.id} className="scroll-mt-20  md:mx-12 lg:mx-24 xl:mx-40 my-16">
      <h3 className="text-3xl font-bold mb-8 text-amber-800 animate-fade-in-up">{section.title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {section.items.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row gap-4 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] group animate-fade-in-up animate-stagger-${(index % 4) + 1}`}
          >
            <div className="relative h-64 md:h-auto md:w-1/3 overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg?height=300&width=300"}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            <div className="p-4 md:w-2/3 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold transition-colors duration-300 group-hover:text-amber-700">
                    {item.name}
                  </h4>
                  <span className="text-amber-600 font-bold text-lg transition-all duration-300 group-hover:scale-110 group-hover:text-amber-700">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 transition-colors duration-300 group-hover:text-gray-700">
                  {item.description}
                </p>
              </div>
              {item.dietary && (
                <div className="flex flex-wrap gap-2">
                  {item.dietary.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full transition-all duration-300 hover:bg-amber-100 hover:text-amber-800 transform hover:scale-105 animate-fade-in animate-stagger-${tagIndex + 1}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
