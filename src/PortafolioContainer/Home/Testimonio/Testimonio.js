import React, { Fragment } from 'react';
import {Card, } from "react-bootstrap";
import './Testimonio.css'
import img1 from '../../img/img1.png';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.png';
import img from '../../img/img.png';

const Testimonio = () => {
  return (
<Fragment>

<div className='testi'>
<h1 id = 'testimonio'className='testimonio1'>Testimonios</h1>
    <div className='testimonio'>
      
     <Card style={{ width: "18rem" }}><img id= 'img'src={img1} />
      <Card.Body>
        <Card.Title>Juan Antonio</Card.Title>
        <Card.Text>
        Tengo algunos años trabajando con Javascript y aún así aprendí varias cosas importantes de Antonio y como utiliza Javascript en el día a día.
        </Card.Text>
      </Card.Body>
    </Card>

    
    <Card style={{ width: "18rem" }} ><img id= 'img' src={img2} />
      <Card.Body>
        <Card.Title>Albert Flores</Card.Title>
        <Card.Text>
        Me gusto ver el porqué de las cosas del core de React, saber la magia que ocurre por detrás, excelente profesor Antonio 
gran vocación.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem" }}><img id= 'img' src={img3} />
      <Card.Body>
        <Card.Title>Darlene Robertson</Card.Title>
        <Card.Text>
        Ayuda a entender el porqué de las cosas, lo cual nos da el poder de aprovechar mejor el lenguaje y las herramientas que tenemos.
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
</div>
    <img id= 'imgfinal' src={img} />
    </Fragment>
  );
};

export default Testimonio;