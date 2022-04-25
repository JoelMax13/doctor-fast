import React, { Component } from "react";
import '../../Css-Componentes/Paciente/BackgroundPatient.css';
import '../../Css-Componentes/Paciente/ListaDoctores.css';
import '../../Imagenes/LogoDoctorFast1.png';

export default class RecetasPaciente extends Component{
    render(){
        return(
            <div className="fondoSistema">
                <div className="cuadro">
                    <header className="headerPaciente">
                        <img class="logo" src={require("../../Imagenes/LogoDoctorFast1.png")}/>
                        <span class="nombreApp">DoctorFast</span>
                    </header>
                    <span className="menuIcono">☰</span>
                    <div className="navigation">
                    <ul className="ulNavegacion">
                            <li className="liNavegacion">
                                <a className="aNavegacion" href="/iniciopaciente"><i className="fa fa-home"></i><br/>Inicio</a>
                            </li>
                            <li>
                                <a className="aNavegacion" href="/citaspaciente"><i className="fa fa-calendar-check-o"></i><br/>Citas</a>
                            </li>
                            <li>
                                <a className="menuClickeado aNavegacion" href="/recetaspaciente"><i className="fa fa-file-text-o"></i><br/>Recetas</a>
                            </li>
                            <li>
                                <a className="aNavegacion" href="/historialmedicopaciente"><i className="fa fa-paste"></i><br/>Historial Médico</a>
                            </li>
                        </ul>
                    </div>
                    <div class="contenido">
                        <h1>Hola de nuevo </h1>
                    </div>
                </div>
            </div>
        );
    }
}