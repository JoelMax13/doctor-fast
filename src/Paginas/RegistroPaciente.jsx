import React, { Component, useState } from 'react';

class RegistroPaciente extends Component{
    render(){

        cedula = React.createRef();
        nombres = React.createRef();
        apellidos = React.createRef();
        telefono = React.createRef();
        celular = React.createRef();
        direccion = React.createRef();
        usuario = React.createRef();
        correo = React.createRef();
        contrasena = React.createRef();
        confirmarContrasena = React.createRef();
        
        obtenerDatos = (event) =>{
            event.preventDefault();
            let cedula = this.cedula.current.value;
            let nombres = this.nombres.current.value;
            let apellidos = this.apellidos.current.value;
            let telefono = this.telefono.current.value;
            let celular = this.celular.current.value;
            let direccion = this.direccion.current.value;
            let usuario = this.usuario.current.value;
            let correo = this.correo.current.value;
            let contrasena = this.contrasena.current.value;
            let confirmarContrasena = this.confirmarContrasena.current.value;
            
            console.log(cedula, nombres, apellidos, telefono, celular, direccion, usuario,
                contrasena, correo);
            // if(contrasena == confirmarContrasena){
            //     // this.ingresarDatosPaciente(cedula, nombres, apellidos, telefono, celular, direccion, usuario, contrasena, correo);
            // }
            // else{
            //     alert("No se ha podido guardar sus datos");
            // }
        }

        ingresarDatosPaciente(cedulaP, nombresP, apellidosP, telefonoP, celularP, direccionP, usuarioP, contrasenaP, correoP){
            const body = { 
                cedula: cedulaP,
                nombres: nombresP,
                apellidos: apellidosP,
                telefono: telefonoP,
                celular: celularP,
                direccion: direccionP,
                usuario: usuarioP,
                correo: correoP,
                contrasena: contrasenaP
            }
            axios.post(uri, body)
                .then(response => console.log(response.data))
                .catch(error => console.log(error));
        }

        //Falta poner el onSubmit formulario
        return(
            <form>
                <div class="fondo">
                    <div class="cuadro">
                        <h1 className='h1'>Registro:</h1>
                        <div class="containerRegistro">
                            <div class="infoPersonal">
                                <h2><i class="fa fa-id-card-o"></i> Información Personal</h2>
                                {/* Cédula */}
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label lblArriba">
                                        Número de identidad:
                                    </label>
                                    <div class="col-sm-9 txtAbajo">
                                        <input ref={this.cedula} type="text" class="form-control" id="TxtCedula" placeholder="Número de identidad"/>
                                    </div>
                                </div>
                                {/* Nombres */}
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label lblArriba">
                                        Nombres:
                                    </label>
                                    <div class="col-sm-9 txtAbajo">
                                        <input ref={this.nombres} type="text" class="form-control" id="TxtNombres" placeholder=""/>
                                    </div>
                                </div>
                                {/* Apellidos */}
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label lblArriba">
                                        Apellidos:
                                    </label>
                                    <div class="col-sm-9 txtAbajo">
                                        <input ref={this.apellidos} type="text" class="form-control" id="TxtApellidos" placeholder=""/>
                                    </div>
                                </div>
                            </div>
                            <div class="infoContacto">
                                <h2><i class="fa fa-address-book-o"></i> Contactos</h2>
                                {/* Telefono Convencional */}
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label lblArriba">
                                        Teléfono:
                                    </label>
                                    <div class="col-sm-9 txtAbajo">
                                        <input ref={this.telefono} type="text" class="form-control" id="TxtTelefono" placeholder=""/>
                                    </div>
                                </div>
                                {/* Celular */}
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label lblArriba">
                                        Celular:
                                    </label>
                                    <div class="col-sm-9 txtAbajo">
                                        <input ref={this.celular} type="text" class="form-control" id="TxtCelular" placeholder=""/>
                                    </div>
                                </div>
                                {/* Dirección */}
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label lblArriba">
                                        Dirección:
                                    </label>
                                    <div class="col-sm-9 txtAbajo">
                                        <input ref={this.direccion} type="text" class="form-control" id="TxtDireccion" placeholder=""/>
                                    </div>
                                </div>
                            </div>
                            <div class="infoPrivada">
                                <h2><i class="fa fa-briefcase"></i> Información Privada</h2>
                                {/* Correo */}
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label lblArriba">
                                        Correo:
                                    </label>
                                    <div class="col-sm-9 txtAbajo">
                                        <input ref={this.correo} type="text" class="form-control" id="TxtCorreo"/>
                                    </div>
                                </div>
                                {/* Contraseña */}
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label lblArriba">
                                        Contraseña:
                                    </label>
                                    <div class="col-sm-9 txtAbajo">
                                        <input ref={this.contrasena} type="text" class="form-control" id="TxtContrasena"/>
                                    </div>
                                </div>
                                {/* Confirmar Contraseña */}
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label lblArriba" id="ConfirmarContrasena">
                                        Confirmar Contraseña:
                                    </label>
                                    <div class="col-sm-9 txtAbajo">
                                        <input ref={this.confirmarContrasena} type="text" class="form-control" id="TxtConfirmarContrasena"/>
                                    </div>
                                </div>
                            </div>
                            <input class="btn btn-primary" id="BtnRegistrar" type="submit" value="Registrar"/>
                            <div class="abajo">
                                <label>Para Iniciar Sesión <a href="/">Click Aquí</a></label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
export default RegistroPaciente;