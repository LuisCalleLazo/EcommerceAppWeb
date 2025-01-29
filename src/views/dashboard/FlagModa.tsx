

const flags = [
  { code: "us", name: "United States" },
  { code: "es", name: "Spain" },
  { code: "fr", name: "France" },
  { code: "de", name: "Germany" },
  { code: "it", name: "Italy" },
]

export function FlagModal() {
  return (
    <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md p-2 w-48 z-50">
      <ul>
        {flags.map((flag) => (
          <li key={flag.code} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
            <img src={`https://flagcdn.com/w20/${flag.code}.png`} alt={`${flag.name} flag`} className="mr-2" />
            <span>{flag.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

