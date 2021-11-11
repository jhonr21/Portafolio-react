import React from "react";
import Typical from "react-typical";
import './Perfil.css';

export default function Perfil() {
  return (
    <div className="perfil-container">
      <div className="perfil-parent">
        <div className="perfil-detalles">
          <div className="colz">


            <div className='colz-icon'>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>

            <a href="#">
              <i className="fa fa-google-plus-square "></i>
            </a>

            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>

            <a href="#">
              <i className="fa fa-youtube-square"></i>
            </a>

            <a href="#">
              <i className="fa fa-twitter-square"></i>
            </a>
            </div>
           
          </div>

          <div className="perfil-detalle-nombre">
            <span className="primary-text">
              {" "}
              Hola, soy <span className="highlighted-text">Jhon Rangel</span>
            </span>
          </div>
          <div className="detalles-perfil-roles">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Developer Trainner 🔴",
                    1000,
                    "Full Stack Developer 🖥️",
                    1000,
                    "Psicologo 😎",
                    1000,
                    "Entusiasta 🕹️",
                    1000,
                    "Apasianado por la Tecnologia 💻",
                    1000,
                  ]}
                />
              </h1>
              <span>Desarrollador de aplicaciones web</span>
            </span>
          </div>
          <div className="profile-option">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="#">
              <button className="btn primary-btn highlighted-btn">Resumen</button>
            </a>
          </div>
        </div>

        <div className='perfil-picture'>

        
        <div className='perfil-picture-background'></div>
        
        </div>
        </div>
      </div>
    
  );
}
