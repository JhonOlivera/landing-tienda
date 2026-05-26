function Catalogos() {
  const catalogos = [
    { nombre: "Camisetas", emoji: "👕", color: "bg-purple-50" },
    { nombre: "Personalizaciones", emoji: "🎨", color: "bg-yellow-50" },
    { nombre: "Signos zodiacales", emoji: "⭐", color: "bg-pink-50" },
    { nombre: "Figuras de acción", emoji: "🤖", color: "bg-green-50" },
    { nombre: "Cubos Rubik", emoji: "🧩", color: "bg-blue-50" },
    { nombre: "Termos", emoji: "🧴", color: "bg-lime-50" },
    { nombre: "Accesorios", emoji: "🏷️", color: "bg-orange-50" },
  ]

  return (
    <div>
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Catálogos</h2>
      <div className="grid grid-cols-2 gap-3">
        {catalogos.map((cat) => (
          <div key={cat.nombre} className={`${cat.color} border border-gray-100 rounded-2xl p-4 flex flex-col items-center gap-2 cursor-pointer hover:shadow-md transition`}>
            <span className="text-3xl">{cat.emoji}</span>
            <span className="text-sm font-medium text-gray-700 text-center">{cat.nombre}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Catalogos