import React, { Fragment } from 'react';
import { Form } from "react-bootstrap";
import '../ContactMe/Contactame.css'


const Contactame = () => {
    return (
        <Fragment>
            <div className="formulario">
                
                <Form>
                <h1 id='contacto' className='contacto'>Contactame</h1>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre Completo</Form.Label>
                        <Form.Control type="email" placeholder="Nombre completo" />
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="email" placeholder="Correo Electronico" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Mensaje" />
                    </Form.Group>
                </Form>
            </div>
        </Fragment>
    );
}

export default Contactame;