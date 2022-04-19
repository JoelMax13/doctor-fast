import React, { Component } from "react";
import '../../Css-Componentes/Paciente/BackgroundPatient.css';
import '../../Imagenes/LogoDoctorFast1.png';

class InicioDoctor extends Component{
    render(){
        return(
            <div className="cuadro">
                <header>
                    <img className="logo" src={require("../../Imagenes/LogoDoctorFast1.png")}/>
                    <span className="nombreApp">DoctorFast</span>
                </header>
                <span className="menuIcono">☰</span>
                <div className="navigation">
                    <ul>
                        <li>
                            <a className="menuClickeado" href="SystemHomePatient.html"><i className="fa fa-home"></i><br/>Inicio</a>
                        </li>
                        <li>
                            <a href="SystemDatePatient.html"><i className="fa fa-calendar-check-o"></i><br/>Citas</a>
                        </li>
                        <li>
                            <a href="Rangos.html"><i className="fa fa-file-text-o"></i><br/>Recetas</a>
                        </li>
                    </ul>
                </div>
                <div className="contenido">
                    <h1>Hola de nuevo </h1>
                </div>
            </div>
        );
    };
}
export default InicioDoctor;