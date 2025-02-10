"use client"

import { useState, useEffect } from "react"
import { BtnIcon } from "../../components"

const slides = [
  {
    id: 1,
    image: "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg",
    alt: "Velvet Sunscreen Carousel",
  },
  {
    id: 2,
    image: "https://www.esteticalink.com/wp-content/uploads/2013/10/productos-cosmeticos.jpg",
    alt: "Second slide",
  },
  {
    id: 3,
    image: "https://www.39ymas.com/wp-content/uploads/2017/09/pequeño-diccionario-cosmetica-belleza.jpg",
    alt: "Third slide",
  },
]

export const CarouselHome = () => 
{
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="relative w-full overflow-hidden h-[500px]">
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 h-full">
            <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      
      <BtnIcon 
        OnClick={previousSlide}
        icon="bi bi-chevron-left"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 hover:bg-gray-200"
      />
      
      <BtnIcon 
        OnClick={nextSlide}
        icon="bi bi-chevron-right"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 hover:bg-gray-200"
      />

      {/* <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-4 rounded-full shadow-lg transition-all"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button> */}

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

