import React, { useEffect } from 'react'
import PacienteEncabezado from "../../Components/PacienteEncabezado";
import ListaDoctores from '../../Components/ListaDoctores';

export default function InicioPaciente(){

    const nombre = localStorage.getItem('nombre');

    return(
        <div className="fondoSistema">
            <div className="cuadro">
                <PacienteEncabezado/>
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
                    <h1>Hola de nuevo {nombre}</h1>
                </div>
                <div>
                <ListaDoctores/>
                </div>
            </div>
        </div>
    );
}