function Catalogos() {
  const catalogos = [
    { nombre: "Camisetas", emoji: "👕" },
    { nombre: "Personalizaciones", emoji: "🎨" },
    { nombre: "Signos zodiacales", emoji: "⭐" },
    { nombre: "Figuras de acción", emoji: "🤖" },
    { nombre: "Cubos Rubik", emoji: "🧩" },
    { nombre: "Termos", emoji: "🧴" },
    { nombre: "Accesorios", emoji: "🏷️" },
  ]

  return (
    <div>
      <h2 className="text-sm font-semibold text-red-500 uppercase tracking-widest mb-4">Catálogos</h2>
      <div className="grid grid-cols-2 gap-3">
        {catalogos.map((cat) => (
          <div key={cat.nombre} className="bg-zinc-900 border border-zinc-700 hover:border-red-500 rounded-2xl p-4 flex flex-col items-center gap-2 cursor-pointer transition">
            <span className="text-3xl">{cat.emoji}</span>
            <span className="text-sm font-medium text-gray-300 text-center">{cat.nombre}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Catalogos