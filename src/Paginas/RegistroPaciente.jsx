import React, { Component, useState } from 'react';

class RegistroPaciente extends Component{
    render(){
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
                                        <input type="text" class="form-control" id="TxtCedula" placeholder="Número de identidad"/>
                                    </div>
                                </div>
                                {/* Nombres */}
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label lblArriba">
                                        Nombres:
                                    </label>
                                    <div class="col-sm-9 txtAbajo">
                                        <input type="text" class="form-control" id="TxtNombres" placeholder=""/>
                                    </div>
                                </div>
                                {/* Apellidos */}
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label lblArriba">
                                        Apellidos:
                                    </label>
                                    <div class="col-sm-9 txtAbajo">
                                        <input type="text" class="form-control" id="TxtApellidos" placeholder=""/>
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
                                        <input type="text" class="form-control" id="TxtTelefono" placeholder=""/>
                                    </div>
                                </div>
                                {/* Celular */}
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label lblArriba">
                                        Celular:
                                    </label>
                                    <div class="col-sm-9 txtAbajo">
                                        <input type="text" class="form-control" id="TxtCelular" placeholder=""/>
                                    </div>
                                </div>
                                {/* Dirección */}
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label lblArriba">
                                        Dirección:
                                    </label>
                                    <div class="col-sm-9 txtAbajo">
                                        <input type="text" class="form-control" id="TxtDireccion" placeholder=""/>
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
                                        <input type="text" class="form-control" id="TxtCorreo"/>
                                    </div>
                                </div>
                                {/* Contraseña */}
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label lblArriba">
                                        Contraseña:
                                    </label>
                                    <div class="col-sm-9 txtAbajo">
                                        <input type="text" class="form-control" id="TxtContrasena"/>
                                    </div>
                                </div>
                                {/* Confirmar Contraseña */}
                                <div class="mb-3 row">
                                    <label class="col-sm-3 col-form-label lblArriba" id="ConfirmarContrasena">
                                        Confirmar Contraseña:
                                    </label>
                                    <div class="col-sm-9 txtAbajo">
                                        <input type="text" class="form-control" id="TxtConfirmarContrasena"/>
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