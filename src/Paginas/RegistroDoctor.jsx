import React, { Component, useState } from 'react';


class RegistroDoctor extends Component{
    render(){
        return(
            <form>
                <div className="fondo">
                    <div className="cuadro">
                        <h1 className='h1'>Registro:</h1>
                        <div className="containerRegistro">
                            <div className="infoPersonal">
                                <h2><i className="fa fa-id-card-o"></i> Información Personal</h2>
                                {/* Cédula */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Número de identidad:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input type="text" className="form-control" id="TxtCedula" placeholder="Número de identidad"/>
                                    </div>
                                </div>
                                {/* Nombres */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Nombres:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input type="text" className="form-control" id="TxtNombres" placeholder=""/>
                                    </div>
                                </div>
                                {/* Apellidos */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Apellidos:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input type="text" className="form-control" id="TxtApellidos" placeholder=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="infoContacto">
                                <h2><i className="fa fa-address-book-o"></i> Contactos</h2>
                                {/* Telefono Convencional */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Teléfono:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input type="text" className="form-control" id="TxtTelefono" placeholder=""/>
                                    </div>
                                </div>
                                {/* Celular */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Celular:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input type="text" className="form-control" id="TxtCelular" placeholder=""/>
                                    </div>
                                </div>
                                {/* Dirección */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Dirección:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input type="text" className="form-control" id="TxtDireccion" placeholder=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="infoPrivada">
                                <h2><i className="fa fa-briefcase"></i> Información Privada</h2>
                                {/* Correo */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Correo:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input type="text" className="form-control" id="TxtCorreo"/>
                                    </div>
                                </div>
                                {/* Contraseña */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Contraseña:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input type="text" className="form-control" id="TxtContrasena"/>
                                    </div>
                                </div>
                                {/* Confirmar Contraseña */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba" id="ConfirmarContrasena">
                                        Confirmar Contraseña:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input type="text" className="form-control" id="TxtConfirmarContrasena"/>
                                    </div>
                                </div>
                            </div>
                            <div className="infoAcademica">
                                <h2><i className="fa fa-bank"></i> Información Académica</h2>
                                {/* Especialidad */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Especialidad:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input type="text" className="form-control" id="TxtUsuario"/>
                                    </div>
                                </div>
                                {/* Títulos */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Título:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input type="text" className="form-control" id="TxtCorreo"/>
                                    </div>
                                </div>
                                {/* Horarios */}
                                <div className="mb-3 row">
                                    <label className="col-sm-3 col-form-label lblArriba">
                                        Horarios de trabajo:
                                    </label>
                                    <div className="col-sm-9 txtAbajo">
                                        <input type="text" className="form-control" id="TxtContrasena"/>
                                    </div>
                                </div>
                            </div>
                            <input className="btn btn-primary" id="BtnRegistrar" type="submit" value="Registrar"/>
                            <div className="abajo">
                                <label>Para Iniciar Sesión <a href="/">Click Aquí</a></label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
export default RegistroDoctor;