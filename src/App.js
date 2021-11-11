
import Perfil from './PortafolioContainer/Home/perfil/Perfil';
import Footer from './PortafolioContainer/Home/footer/Foorter';
import Header from './PortafolioContainer/Home/header/Header';
import Resumen from './PortafolioContainer/Home/Resumen/Resumen';
import Portafolio from './PortafolioContainer/Home/portafolio/Portafolio';
import Servicio from './PortafolioContainer/Home/Servicio/Servicio';
import './App.css';
import Testimonio from './PortafolioContainer/Home/Testimonio/Testimonio';
import Contactame from './PortafolioContainer/Home/ContactMe/Contactame';

function App() {
  return (
    <div className="App">
      <Header />
      <Perfil />
      <Resumen />
      <Portafolio />
      <Servicio />
      <Testimonio />
      <Contactame/>
      <Footer />

    </div>
  );
}

export default App;
