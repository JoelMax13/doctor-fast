import React, { Component } from "react";
import DoctorEncabezado from "../../Components/DoctorEncabezado";
import Saludo from "../../Components/Saludo";

export default function CitasDoctor(){
    return(
        <div className="fondoSistema">
            <div className="cuadro">
                <DoctorEncabezado />
                <div className="contenido">
                    <Saludo name=""/>
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
        </div>
    );
}