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

export const CarouselHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const previousSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }

  return (
    <div className="relative w-full overflow-hidden h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image || "/placeholder.svg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      <BtnIcon
        OnClick={previousSlide}
        icon="bi bi-chevron-left"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-1 sm:p-2 transition-colors z-10"
      />

      <BtnIcon
        OnClick={nextSlide}
        icon="bi bi-chevron-right"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-1 sm:p-2 transition-colors z-10"
      />

      {/* Slide indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-orange-200 scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-300/30 to-transparent pointer-events-none" />
    </div>
  )
}

