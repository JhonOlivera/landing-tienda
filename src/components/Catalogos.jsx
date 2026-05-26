function Catalogos() {
  const catalogos = [
    { nombre: "Camisetas", emoji: "👕", link: "https://www.canva.com/design/DAGAVa-DfnY/6pCMz62BYF7ZEWNfGC3Beg/view" },
    { nombre: "Personalizaciones", emoji: "🎨", link: "https://www.canva.com/design/DAGAXNGfI3A/R8HcEq8o4KeV0rB2-9J1dQ/view" },
    { nombre: "Signos zodiacales", emoji: "⭐", link: "https://www.canva.com/design/DAGDnRRV84o/vdVNJVuSkbjtiaDWU7q3_g/view" },
    { nombre: "Figuras de acción", emoji: "🤖", link: "https://www.canva.com/design/DAGCTzw0NrY/pq6APofuWguon5f61nKVkg/view" },
    { nombre: "Cubos Rubik", emoji: "🧩", link: "https://www.canva.com/design/DAGCTliV0_Y/FtIrqwix-TKSVIOXH3kcVw/view" },
    { nombre: "Termos", emoji: "🧴", link: "https://www.canva.com/design/DAGCUuUuwp0/h_iD2MuMfbmOzOq3mG55JQ/view" },
    { nombre: "Accesorios", emoji: "🏷️", link: "https://www.canva.com/design/DAGCUtdV_bw/-EJr3C9xOwuAB0n1nsAMEg/view" },
  ]

  return (
    <div>
      <h2 className="text-sm font-semibold text-red-500 uppercase tracking-widest mb-4">Catálogos</h2>
      <div className="grid grid-cols-2 gap-3">
        {catalogos.map((cat) => (
          <a key={cat.nombre} href={cat.link} target="_blank" className="bg-zinc-900 border border-zinc-700 hover:border-red-500 rounded-2xl p-4 flex flex-col items-center gap-2 cursor-pointer transition no-underline">
            <span className="text-3xl">{cat.emoji}</span>
            <span className="text-sm font-medium text-gray-300 text-center">{cat.nombre}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Catalogos