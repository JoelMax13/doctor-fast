import React, { Component } from "react";
import PacienteEncabezado from "../../Components/PacienteEncabezado";

export default function HistorialMedicoPaciente(){
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