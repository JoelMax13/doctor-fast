import React, { Component } from "react";
import PacienteEncabezado from "../../Components/PacienteEncabezado";

export default function RecetasPaciente(){
    return(
        <div className="fondoSistema">
            <div className="cuadro">
            <PacienteEncabezado/>
                <div className="contenido">

                </div>
            </div>
        </div>
    );
}