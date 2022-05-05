import React from 'react';
import '../Css-Componentes/Paciente/BackgroundPatient.css';
import '../Css-Componentes/Paciente/ListaDoctores.css';
import '../Imagenes/LogoDoctorFast1.png';

export default function PacienteEncabezado(){
  return (
      <>
        <header className="headerPaciente">
            <img className="logo" src={require("../Imagenes/LogoDoctorFast1.png")}/>
            <span className="nombreApp">DoctorFast</span>
        </header>
        <span className="menuIcono">☰</span>
        <div className="navigation">
            <ul className="ulNavegacion">
                <li className="liNavegacion">
                    <a className="menuClickeado aNavegacion" href="/iniciopaciente"><i className="fa fa-home"></i><br/>Inicio</a>
                </li>
                <li>
                    <a className="aNavegacion" href="/citaspaciente"><i className="fa fa-calendar-check-o"></i><br/>Citas</a>
                </li>
                <li>
                    <a className="aNavegacion" href="/recetaspaciente"><i className="fa fa-file-text-o"></i><br/>Recetas</a>
                </li>
                <li>
                    <a className="aNavegacion" href="/historialmedicopaciente"><i className="fa fa-paste"></i><br/>Historial Médico</a>
                </li>
            </ul>
        </div>
      </>
  )
}

