import React, { Component } from "react";
import '../Css-Componentes/Paciente/BackgroundPatient.css';
import '../Css-Componentes/Doctor/ListaCalificaciones.css';
import '../Imagenes/LogoDoctorFast1.png';

export default function DoctorEncabezado(){
    return(
        <>
            <header className="headerPaciente">
                <img className="logo" src={require("../Imagenes/LogoDoctorFast1.png")}/>
                <span className="nombreApp">DoctorFast</span>
            </header>
            <span className="menuIcono">☰</span>
            <div className="navigation">
                <ul className="ulNavegacion">
                    <li className="liNavegacion">
                        <a className="aNavegacion" href="/iniciodoctor"><i className="fa fa-home"></i><br/>Inicio</a>
                    </li>
                    <li>
                        <a className="menuClickeado aNavegacion" href="/citasdoctor"><i className="fa fa-calendar-check-o"></i><br/>Citas</a>
                    </li>
                        {/* Crear historial Médico */}
                    <li>
                        <a className="aNavegacion" href="/historialmedicodoctor"><i className="fa fa-paste"></i><br/>Historial Médico</a>
                    </li>
                </ul>
            </div>
        </>
    );
}