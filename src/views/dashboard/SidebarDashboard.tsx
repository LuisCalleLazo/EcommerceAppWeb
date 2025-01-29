import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"
import { ecommerceFilters, type FilterCategory, type FilterOption } from "../../utils";
import { CheckboxDev, SliderDev } from "../../components";
// import { Register } from "../InitSession/Register";
// http://localhost:5173/e-commerce/dashboard

export const SidebarDashboard = () => {
  const [filters, setFilters] = useState<Record<string, any>>({})
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({})

  const handleFilterChange = (categoryId: string, optionId: string, value: boolean | number[]) => {
    setFilters((prev) => ({
      ...prev,
      [categoryId]: {
        ...prev[categoryId],
        [optionId]: value,
      },
    }))
  }

  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }))
  }

  // const applyFilters = () => {
  //   console.log("Filtros aplicados:", filters)
  // }

  const renderFilterOption = (category: FilterCategory, option: FilterOption) => {
    switch (option.type) {
      case "checkbox":
        return (
          <div key={option.id} className="flex items-center space-x-2">
            <CheckboxDev
              id={option.id}
              checked={filters[category.id]?.[option.id] || false}
              onChange={(checked) => handleFilterChange(category.id, option.id, checked)}
            />
            <label
              htmlFor={option.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {option.label}
            </label>
          </div>
        )
      case "range":
        return (
          <div key={option.id} className="space-y-2">
            <label
              htmlFor={option.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {option.label}
            </label>
            <SliderDev
              id={option.id}
              min={option.min ?? 0}
              max={option.max ?? 100}
              step={1}
              value={filters[category.id]?.[option.id] || [option.min!, option.max!]}
              onChange={(value) => handleFilterChange(category.id, option.id, value)}
            />
            <div className="flex justify-between text-xs">
              <span>${filters[category.id]?.[option.id]?.[0] || option.min}</span>
              <span>${filters[category.id]?.[option.id]?.[1] || option.max}</span>
            </div>
          </div>
        )
      default:
        return null
    }
  }
  
  return (
    <div className="w-[300px] min-w-64 pl-[10px] pt-[10px] pb-[10px]">
      <h2 className="text-xl font-bold mb-4 text-[var(--tx-color2)]">Filtros</h2>
      {ecommerceFilters.map((category) => (
        <div key={category.id} className="mb-4">
          <button
            onClick={() => toggleCategory(category.id)}
            className="flex justify-between items-center w-full py-2 text-left text-[var(--tx-color2)]"
          >
            <span className="font-medium">{category.name}</span>
            {openCategories[category.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {openCategories[category.id] && (
            <div className="space-y-2 mt-2">
              {category.options.map((option) => renderFilterOption(category, option))}
            </div>
          )}
        </div>
      ))}
    </div>
  ); 
}