

const flags = [
  { code: "bo", name: "La Paz" },
  { code: "bo", name: "Cochabamba" },
  { code: "bo", name: "Santa Cruz" },
  { code: "bo", name: "Oruro" },
  { code: "bo", name: "Tarija" },
  { code: "bo", name: "Pando" },
  { code: "bo", name: "Chuquisaca" },
  { code: "bo", name: "Potosi" },
  { code: "bo", name: "Beni" },
]

export function FlagModal() {
  return (
    <div className="absolute top-full bg-white shadow-md rounded-md w-48 z-50">
      <ul>
        {flags.map((flag) => (
          <li key={flag.code} className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
            <img src={`https://flagcdn.com/w20/${flag.code}.png`} alt={`${flag.name} flag`} className="mr-2" />
            <span>{flag.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

