import React, { Component } from "react";
import DatosRecetasPaciente from "../../Components/Paciente/DatosRecetasPaciente";
import PacienteEncabezado from "../../Components/Paciente/PacienteEncabezado";

export default function RecetasPaciente(){
    const nombre = localStorage.getItem('nombre');
    return(
        <div className="fondoSistema">
            <div className="cuadro">
                <PacienteEncabezado/>
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
                <div className="contenido">
                <h1>{nombre} sus últimas recetas médicas son:</h1>
                </div>
                <div>
                    <DatosRecetasPaciente/>
                </div>
            </div>
        </div>
    );
}