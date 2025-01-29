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


export const ecommerceProducts = []

export const categoryProducts = [
  {
    id : 1,
    name: "",
  },
  {
    id : 2,
    name: "",
  },
  {
    id : 3,
    name: "",
  },
  {
    id : 4,
    name: "",
  },
  {
    id : 5,
    name: "",
  },
  {
    id : 6,
    name: "",
  },
  {
    id : 7,
    name: "",
  },
  {
    id : 8,
    name: "",
  },
  {
    id : 9,
    name: "",
  },
  {
    id : 10,
    name: "",
  },
  {
    id : 11,
    name: "",
  },
  {
    id : 12,
    name: "",
  },
  {
    id : 13,
    name: "",
  },
  {
    id : 14,
    name: "",
  },
  {
    id : 15,
    name: "",
  },
  {
    id : 16,
    name: "",
  },
  {
    id : 17,
    name: "",
  }
]