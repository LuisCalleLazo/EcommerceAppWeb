export interface FilterOption {
  id: string
  label: string
  type: "checkbox" | "range"
  min?: number
  max?: number
}

export interface FilterCategory {
  id: string
  name: string
  options: FilterOption[]
}

export const ecommerceFilters: FilterCategory[] = [
  {
    id: "price",
    name: "Price",
    options: [
      {
        id: "priceRange",
        label: "Price range",
        type: "range",
        min: 0,
        max: 1000,
      },
    ],
  },
  {
    id: "brand",
    name: "Marca",
    options: [
      { id: "brand1", label: "Apple", type: "checkbox" },
      { id: "brand2", label: "Samsung", type: "checkbox" },
      { id: "brand3", label: "Nike", type: "checkbox" },
      { id: "brand4", label: "Adidas", type: "checkbox" },
      { id: "brand5", label: "Amdroid", type: "checkbox" },
      { id: "brand6", label: "Nokia", type: "checkbox" },
      { id: "brand7", label: "MSI", type: "checkbox" },
      { id: "brand8", label: "HP", type: "checkbox" },
    ],
  },
  {
    id: "rating",
    name: "Calificación",
    options: [
      { id: "4-stars", label: "4 estrellas y más", type: "checkbox" },
      { id: "3-stars", label: "3 estrellas y más", type: "checkbox" },
      { id: "2-stars", label: "2 estrellas y más", type: "checkbox" },
    ],
  },
  {
    id: "descuento",
    name: "Descuento",
    options: [
      { id: "10", label: "10% de descunto o más", type: "checkbox" },
      { id: "20", label: "20% de descunto o más", type: "checkbox" },
      { id: "30", label: "30% de descunto o más", type: "checkbox" },
      { id: "40", label: "40% de descunto o más", type: "checkbox" },
      { id: "50", label: "50% de descunto o más", type: "checkbox" },
      { id: "60", label: "60% de descunto o más", type: "checkbox" },
      { id: "70", label: "70% de descunto o más", type: "checkbox" },
    ],
  },
  {
    id: "beneficios",
    name: "Beneficios",
    options: [
      { id: "ben1", label: "4 estrellas y más", type: "checkbox" },
      { id: "ben2", label: "3 estrellas y más", type: "checkbox" },
      { id: "ben3", label: "2 estrellas y más", type: "checkbox" },
    ],
  },
]

