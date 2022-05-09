import React, { Component } from "react";
import PacienteEncabezado from "../../Components/PacienteEncabezado";
import Saludo from "../../Components/Saludo";

import axios from "axios";

let uri = 'https://doctorfastapi.herokuapp.com/paciente';
let usuario = localStorage.getItem('user');

export default function InicioPaciente(){


    // var myHeaders = new Headers();
    // myHeaders.append("token", usuario);
    // var requestOptions = {
    //     method: 'GET',
    //     headers: myHeaders,
    //     redirect: 'follow'
    // };

    function getNombre(){
        // usuario = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3NTEzNjkyMTQiLCJpYXQiOjE2NTIwNjcxNTUsImV4cCI6MTY1MjE1MzU1NX0.zkVNnyfCvNAo1W61z9OaJxV9QTN12OjMZyXve2saH0M";

        var requestOptions = {
            method: 'GET',
            headers: {"token": usuario},
            redirect: 'follow'
        };

        fetch(uri, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
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