import React, { Component } from "react";
import PacienteEncabezado from "../../Components/PacienteEncabezado";
import Saludo from "../../Components/Saludo";

import axios from "axios";

let uri = 'https://doctorfastapi.herokuapp.com/paciente';

export default function InicioPaciente(){

    let usuario = localStorage.getItem('user');

    function getNombre(){
        axios.get(uri, usuario)
        .then(response => alert(response))
        .catch(error => alert(error))
    }

    window.addEventListener('load', (event) => {
        getNombre();
      });

    return(
        <div className="fondoSistema">
            <div className="cuadro">
                <PacienteEncabezado/>
                <div className="contenido">
                <Saludo name=""/>
                </div>
            </div>
        </div>
    );
}