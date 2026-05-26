import logo from '../assets/logo.png'

function Header() {
  return (
    <div className="text-center mb-6">
      <img src={logo} alt="Maurotex logo" className="w-40 h-40 object-cover rounded-full mx-auto mb-3" />
      <h1 className="text-2xl font-bold text-white mb-1">MAUROTEX</h1>
      <p className="text-gray-400 text-sm">Camisetas, accesorios, figuras de acción, personalizaciones</p>
      <p className="text-gray-500 text-xs mt-1">Bogotá, Colombia</p>
    </div>
  )
}

export default Header