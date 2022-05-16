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
      </>
  )
}

