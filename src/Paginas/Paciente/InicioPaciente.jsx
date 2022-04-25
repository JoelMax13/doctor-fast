import React, { Component } from "react";
import '../../Css-Componentes/Paciente/BackgroundPatient.css';
import '../../Css-Componentes/Paciente/ListaDoctores.css';
import '../../Imagenes/LogoDoctorFast1.png';

class InicioPaciente extends Component{
    render(){
        return(
            <div className="fondoSistema">
                <div className="cuadro">
                    <header className="headerPaciente">
                        <img className="logo" src={require("../../Imagenes/LogoDoctorFast1.png")}/>
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
                    <div className="contenido">
                        <h1>Hola de nuevo Ricardo Haro...</h1>
                        <div className="busqueda">
                            <label>¿Qué tipo de especialidad estás buscando?</label>
                            <input type="text"/>
                            <button>Buscar</button>
                        </div>
                        <div className='Contenedor-Doctor'> 
                            <div className='Contenedor-texto-Doctor'>
                                <p className='Nombre-Doctor'>Julian Daniel Alvarez</p>
                                <p className='Especialidad-Doctor'>Médico general</p>
                                <p className='Horarios-Doctor'>11:00 a 16:00</p>
                                <p className='Direccion-Doctor'>Av. 12 de Octubre y Colon</p>
                                <p className='Calificacion'>🌟🌟🌟🌟🌟</p>
                            </div>
                            <button className='btn btn-outline-secondary BtnAgendar'>Agendar</button>
                        </div>
                        <div className='Contenedor-Doctor'> 
                            <div className='Contenedor-texto-Doctor'>
                                <p className='Nombre-Doctor'>Gonzalo Vinicio Plata</p>
                                <p className='Especialidad-Doctor'>Cardiología</p>
                                <p className='Horarios-Doctor'>8:00 a 14:00</p>
                                <p className='Direccion-Doctor'>Av. 6 de Diciembre y Río Coca</p>
                                <p className='Calificacion'>🌟🌟🌟</p>
                            </div>
                            <button className='btn btn-outline-secondary BtnAgendar'>Agendar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
}
export default InicioPaciente;