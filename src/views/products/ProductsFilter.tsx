import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { ecommerceFilters, type FilterCategory, type FilterOption } from "../../utils"
import { InputCheckBox, InputRange } from "../../components"

export const ProductsFilter = () => {
  const [filters, setFilters] = useState<Record<string, any>>({})
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    Object.fromEntries(ecommerceFilters.map(category => [category.id, true]))
  );
  

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
          <InputCheckBox
            key={option.id}
            id={option.id}
            label={option.label}
            checked={filters[category.id]?.[option.id] || false}
            onChange={(checked) => handleFilterChange(category.id, option.id, checked)}
          />
        );
      case "range":
        const minValue = option.min ?? 0;
        const maxValue = option.max ?? 100;
        const currentMinValue = filters[category.id]?.[option.id]?.[0] ?? minValue;
        const currentMaxValue = filters[category.id]?.[option.id]?.[1] ?? maxValue;
        return (
          <InputRange
            key={option.id}
            id={option.id}
            min={minValue}
            max={maxValue}
            currentMinValue={currentMinValue}
            currentMaxValue={currentMaxValue}
            onChange={(min, max) => handleFilterChange(category.id, option.id, [min, max])}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className="flex-col w-full lg:min-w-[150px] lg:max-w-[300px] bg-white rounded-lg">
      {ecommerceFilters.map((category) => (
        <div key={category.id} className="border-b last:border-b-0">
          <button
            onClick={() => toggleCategory(category.id)}
            className="flex justify-between items-center w-full p-4 text-left text-gray-800 hover:text-pink-600 transition-colors duration-200"
          >
            <span className="font-medium">{category.name}</span>
            {openCategories[category.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {openCategories[category.id] && (
            <div className="space-y-3 px-4 pb-4">
              {category.options.map((option) => (
                <div key={option.id}>{renderFilterOption(category, option)}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

