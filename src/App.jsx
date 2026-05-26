import Header from './components/Header'
import RedesSociales from './components/RedesSociales'
import Catalogos from './components/Catalogos'
import BotonWhatsapp from './components/BotonWhatsapp'

function App() {
  return (
    <div className="min-h-screen bg-white max-w-md mx-auto px-4 py-8">
      <Header />
      <RedesSociales />
      <Catalogos />
      <BotonWhatsapp />
    </div>
  )
}

export default App