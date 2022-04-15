import React, { Component, useState } from 'react';
import '../Css-Componentes/Login.css';
import '../Css-Componentes/FondoBase.css';


class Login extends Component{
    usuarioRef = React.createRef();

    obtenerDatos = (e) =>{
        e.preventDefault();
        console.log(this.usuarioRef.current.value);
    }

    render(){
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className='fondo'>
                <div className='cuadro'>
                    <h1>Ingreso:</h1>
                    <div className="container">
                <div className="mb-3 row">
                    <label for="staticEmail" className="col-sm-3 col-form-label lblArriba">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>
                        Correo / Usuario
                    </label>
                    <div className="col-sm-9 txtAbajo">
                        <input ref={this.usuarioRef} type='text' className="form-control" id="TxtCorreo" placeholder=""/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="inputPassword" className="col-sm-3 col-form-label lblArriba">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key-fill" viewBox="0 0 16 16">
                            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                        Contraseña
                    </label>
                    <div className="col-sm-9 txtAbajo">
                        <input type='password' className="form-control" id="TxtContrasena"/>
                    </div>
                </div>
                <div>
                    <button id="BtnVerContrasena" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                        </svg>
                    </button>
                    <label for="BtnVerContrasena">Mostrar Contraseña</label>
                </div>
                <input className="btn btn-primary" id="BtnIngresar" type="submit" value="Ingresar"/>
                <div className="abajo">
                    <label>Para registrarse <a href="RegisterChoose.html">Click Aquí</a></label>
                </div>
            </div>
                </div>
                </div>
            </form>
        );
    }
}
export default Login;