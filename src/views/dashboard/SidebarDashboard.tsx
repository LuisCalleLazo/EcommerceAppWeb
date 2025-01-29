import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { ecommerceFilters, type FilterCategory, type FilterOption } from "../../utils"

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

  const renderFilterOption = (category: FilterCategory, option: FilterOption) => {
    switch (option.type) {
      case "checkbox":
        return (
          <div key={option.id} className="flex items-center space-x-3 mb-2">
            <div className="relative">
              <input
                type="checkbox"
                id={option.id}
                checked={filters[category.id]?.[option.id] || false}
                onChange={(e) => handleFilterChange(category.id, option.id, e.target.checked)}
                className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-[var(--tx-color2)] checked:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--tx-color2)] focus:ring-offset-2"
              />
              <svg
                className="absolute w-4 h-4 top-0.5 left-0.5 pointer-events-none hidden check-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <label htmlFor={option.id} className="text-sm font-medium leading-none text-gray-700 select-none">
              {option.label}
            </label>
          </div>
        )
      case "range":
        const minValue = option.min ?? 0
        const maxValue = option.max ?? 100
        const currentMinValue = filters[category.id]?.[option.id]?.[0] ?? minValue
        const currentMaxValue = filters[category.id]?.[option.id]?.[1] ?? maxValue
        return (
            <div key={option.id} className="space-y-4 mb-4">
              <label htmlFor={option.id} className="text-sm font-medium leading-none text-gray-700">
                {option.label}
              </label>
              <div className="relative pt-1">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-700">Bs {currentMinValue}</span>
                  <span className="text-xs font-semibold text-gray-700">Bs {currentMaxValue}</span>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 right-0 bg-gray-200 rounded-full h-1"></div>
                  <input
                    type="range"
                    min={minValue}
                    max={maxValue}
                    value={currentMinValue}
                    onChange={(e) =>
                      handleFilterChange(category.id, option.id, [Number(e.target.value), currentMaxValue])
                    }
                    className="absolute inset-y-0 left-0 w-full h-1 m-0 bg-transparent appearance-none pointer-events-none"
                  />
                  <input
                    type="range"
                    min={minValue}
                    max={maxValue}
                    value={currentMaxValue}
                    onChange={(e) =>
                      handleFilterChange(category.id, option.id, [currentMinValue, Number(e.target.value)])
                    }
                    className="absolute inset-y-0 left-0 w-full h-1 m-0 bg-transparent appearance-none pointer-events-none"
                  />
                </div>
                <div className="relative">
                  <div
                    className="absolute inset-y-0 left-0 bg-[var(--tx-color2)] rounded-full h-1"
                    style={{
                      width: `${((currentMaxValue - currentMinValue) / (maxValue - minValue)) * 100}%`,
                      left: `${((currentMinValue - minValue) / (maxValue - minValue)) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col min-w-[150px] max-w-[300px] p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Filtros</h2>
      {ecommerceFilters.map((category) => (
        <div key={category.id} className="mb-6">
          <button
            onClick={() => toggleCategory(category.id)}
            className="flex justify-between items-center w-full py-2 text-left text-gray-800 hover:text-[var(--tx-color2)] transition-colors duration-200"
          >
            <span className="font-medium">{category.name}</span>
            {openCategories[category.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {openCategories[category.id] && (
            <div className="space-y-2 mt-3 pl-2">
              {category.options.map((option) => renderFilterOption(category, option))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

