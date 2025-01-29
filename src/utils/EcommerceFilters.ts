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
    id: "category",
    name: "Categorías",
    options: [
      { id: "cosmetics", label: "Cosmeticos", type: "checkbox" },
      { id: "electronics", label: "Electrónicos", type: "checkbox" },
      { id: "clothing", label: "Ropa", type: "checkbox" },
      { id: "books", label: "Libros", type: "checkbox" },
      { id: "home", label: "Hogar", type: "checkbox" },
    ],
  },
  {
    id: "price",
    name: "Precio",
    options: [{ id: "price-range", label: "Rango de precio", type: "range", min: 0, max: 1000 }],
  },
  {
    id: "brand",
    name: "Marca",
    options: [
      { id: "apple", label: "Apple", type: "checkbox" },
      { id: "samsung", label: "Samsung", type: "checkbox" },
      { id: "nike", label: "Nike", type: "checkbox" },
      { id: "adidas", label: "Adidas", type: "checkbox" },
      { id: "apple", label: "Apple", type: "checkbox" },
      { id: "samsung", label: "Samsung", type: "checkbox" },
      { id: "nike", label: "Nike", type: "checkbox" },
      { id: "adidas", label: "Adidas", type: "checkbox" },
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
]

