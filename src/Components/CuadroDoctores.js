import React from "react";

const CuadroDoctores = ({Doctor}) => {
    return (
        <div className="Contenedor-Doctor">
            <div className="Nombre-texto-Doctor">
                <p className="Nombre-Doctor">{Doctor.nombre} {Doctor.apellido}</p>
                <p className="Especialidad-Doctor">{Doctor.especialidad}</p>
                <p className="Direccion-Doctor">{Doctor.direccion}</p>
            </div>
            <button className="btn btn-outline-secondary BtnAgendar">Agendar</button>
        </div>
    )
}
export default CuadroDoctores;