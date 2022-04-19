import React, { Component } from "react";
import '../../Css-Componentes/Paciente/BackgroundPatient.css';
import '../../Css-Componentes/Doctor/ListaCalificaciones.css';
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
                    <ul className="ulNavegacion">
                        <li className="liNavegacion">
                            <a className="menuClickeado aNavegacion"><i className="fa fa-home"></i><br/>Inicio</a>
                        </li>
                        <li>
                            <a className="aNavegacion"><i className="fa fa-calendar-check-o"></i><br/>Citas</a>
                        </li>
                        {/* Crear historial Médico */}
                        <li>
                            <a className="aNavegacion"><i className="fa fa-paste"></i><br/>Historial Médico</a>
                        </li>
                    </ul>
                </div>
                <div className="contenido">
                    <h1>Hola de nuevo Julian Daniel Alvarez...</h1>
                    <div className='Contenedor-Calificacion'> 
                        <div className='Contenedor-texto-Calificacion'>
                            <p className='Nombre-Paciente'>Ricardo Haro</p>
                            <p className='Horario-Cita'>14:00 18/04/2022</p>
                            <p className='Direccion-Doctor'>Av. 12 de Octubre y Colon</p>
                            <p className='Calificacion'>🌟🌟🌟🌟🌟</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
export default InicioDoctor;