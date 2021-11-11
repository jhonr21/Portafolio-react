import React, { Fragment } from 'react';
import './Servicio.css'
import {button} from "react-bootstrap";


const Servicio = () => {
    return (  
        <Fragment>
            <div className='todo'>
        <h1 className='servicio' >Servicio</h1>
        <div className='tipos'>
            
            <div className='textservicio' >
                <h2>Diseno</h2>
                <h4>Experiencia de Usuario</h4>
                <h4>Interfaz de Usuario</h4>
                <h4>Aplicaciones Web</h4>
                <h4>Prueba de concepto</h4>
                <button className='btn1'>Ver servicio de Diseno</button>
            </div>

            <div>
                <h2 className='textservicio' >Desarrollo</h2>
                <h4>Aplicaciones Moviles</h4>
                <h4>Sitio Web</h4>
                <h4>Aplicaciones Progresivas</h4>
                <button className='btn1'>Ver servicio de Desarrollo</button>
            </div>

            <div className='textservicio' >
                <h2>Marca</h2>
                <h4>Identidad de marca</h4>
                <h4>Estrategia de marca</h4>
                <button className='btn1'>Ver servicio de marca</button>
            </div>

            </div>
            </div>
        </Fragment>

    );
}
 
export default Servicio;