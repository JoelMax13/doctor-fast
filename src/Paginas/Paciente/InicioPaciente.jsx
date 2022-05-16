import React, { useEffect } from 'react'
import PacienteEncabezado from "../../Components/PacienteEncabezado";
import Saludo from "../../Components/Saludo";
import ListaDoctores from '../../Components/ListaDoctores';

let uri = 'https://doctorfastapi.herokuapp.com/paciente';

export default function InicioPaciente(){
    
    const nombre = localStorage.getItem('nombre');

    return(
        <div className="fondoSistema">
            <div className="cuadro">
                <PacienteEncabezado/>
                <div className="contenido">
                    <Saludo name={nombre}/>
                </div>
                <div>
                <ListaDoctores/>
                </div>
            </div>
        </div>
    );
}