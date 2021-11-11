import { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import "./Portafolio.css";
import Peliculas from '../../img/pelicula.jpg';
import Tributo from '../../img/rio.jpg';
import Formulario from '../../img/formulario.jpg';


const Portafolio = () => {
  return (
    <Fragment>
<h1 id = 'proyectos' className="portafolio">Portafolio</h1>
      <div className='tarjeta'>
      <div className="card">
        <Card className="card1">
          <Card.Img variant="top" id ='fomu'src={Formulario} />
          <Card.Body>
            <Card.Title id ="titulo1">Formulario</Card.Title>
            <Card.Text id ="titulod">
              HTML, CSS, Javascript
            </Card.Text>
            <Button id ='ver' href="https://jhonr21.github.io/formulario-actividad2/" variant="primary">Ver pagina</Button>

          </Card.Body>
        </Card>
      </div>


      
      <div className="card">
        <Card className="card1">
          <Card.Img src={Tributo} variant="top"  />
          <Card.Body>
            <Card.Title class="port2">Pagina Tributo</Card.Title>
            <Card.Text>
            HTML, CSS, Javascript
            </Card.Text>
            <Button href={'https://jhonr21.github.io/paina-tributo/'} variant="primary">Ver pagina</Button>
          </Card.Body>
        </Card>
      </div>

      
      <div className="card">
        <Card className="card1">
          <Card.Img src={Peliculas} variant="top"  />
          <Card.Body>
            <Card.Title class="port2">Pagina de Peliculas</Card.Title>
            <Card.Text>
              CRUD,pis, Json server, HTML, CSS, Javascript
            </Card.Text>
            <Button href={'https://jhonr21.github.io/SPRINT-1/'} variant="primary">Ver pagina</Button>
          </Card.Body>
        </Card>
      </div>

      
      </div>
    </Fragment>
  );
};

export default Portafolio;
