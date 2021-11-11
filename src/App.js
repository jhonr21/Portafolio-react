
import Perfil from './PortafolioContainer/Home/Perfil';
import Footer from './PortafolioContainer/Home/footer/Foorter';
import Header from './PortafolioContainer/Home/header/Header';
import Resumen from './PortafolioContainer/Resumen/Resumen';
import Portafolio from './PortafolioContainer/portafolio/Portafolio';
import Servicio from './PortafolioContainer/Servicio/Servicio';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Perfil />
      <Resumen />
      <Portafolio />
      <Servicio />
      <Footer />

    </div>
  );
}

export default App;
