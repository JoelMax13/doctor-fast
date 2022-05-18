import React, { Component } from "react";
import DoctorEncabezado from "../../Components/DoctorEncabezado";

export default function HistorialMedicoDoctor(){
    return(
        <div className="fondoSistema">
            <div className="cuadro">
                <DoctorEncabezado/>
                <div className="navigation">
                    <ul className="ulNavegacion">
                        <li className="liNavegacion">
                            <a className="aNavegacion" href="/iniciodoctor"><i className="fa fa-home"></i><br/>Inicio</a>
                        </li>
                        <li>
                            <a className="aNavegacion" href="/citasdoctor"><i className="fa fa-calendar-check-o"></i><br/>Citas</a>
                        </li>
                            {/* Crear historial Médico */}
                        <li>
                            <a className="menuClickeado aNavegacion" href="/historialmedicodoctor"><i className="fa fa-paste"></i><br/>Historial Médico</a>
                        </li>
                    </ul>
                </div>
                <div className="contenido">
                    
                </div>
            </div>
        </div>
    );
}