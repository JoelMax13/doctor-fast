import React, { useEffect } from 'react'
import PacienteEncabezado from "../../Components/PacienteEncabezado";
import Saludo from "../../Components/Saludo";
import ListaDoctores from '../../Components/ListaDoctores';

import axios from "axios";
import { token } from "../Login";

let uri = 'https://doctorfastapi.herokuapp.com/paciente';

let usuario;

export default function InicioPaciente(){

    usuario = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3NTEzNjkyMTQiLCJpYXQiOjE2NTI1MDQzNDcsImV4cCI6MTY1MjU5MDc0N30.tStzgoOFgViqiT9bCCYNvmT6s_GSCZ7hhmfo5Fm5db4";
    // let usuario = localStorage.getItem('user');
    function getNombre(){

        var axios = require('axios');

        var config = {
        method: 'get',
        url: uri,
        headers: { 
            'token': usuario
        }
        };

        axios(config)
        .then(function (response) {
            localStorage.setItem("nombre", response.data.nombre);
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    const nombre = localStorage.getItem('nombre');

    useEffect(()=>{
        getNombre();
    }, [])

    

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