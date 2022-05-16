import React, {useState} from "react";
import Modal from "./Modal";
import styledComponents from "styled-components";

const CuadroDoctores = ({Doctor}) => {
    const [estadoModal, cambiarEstadoModal] = useState(false);

    function guardarCita(){

        //POST

        cambiarEstadoModal(!estadoModal);
    }

    return (
        <div className="Contenedor-Doctor">
            <div className="Nombre-texto-Doctor">
                <p className="Nombre-Doctor">{Doctor.nombre} {Doctor.apellido}</p>
                <p className="Especialidad-Doctor">{Doctor.especialidad}</p>
                <p className="Direccion-Doctor">{Doctor.direccion}</p>
            </div>
            <button 
                className="btn btn-outline-secondary BtnAgendar"
                onClick={()=>cambiarEstadoModal(!estadoModal)}
            >
                Agendar
            </button>
            <Modal 
                estado={estadoModal}
                cambiarEstado={cambiarEstadoModal}
            >
                <h3>{Doctor.nombre} {Doctor.apellido}</h3>
                <p>{Doctor.especialidad}</p>

                <button 
                    className="btn btn-outline-primary"
                    onClick={guardarCita}
                >
                    Agendar
                </button>
            </Modal>
        </div>
    )
}
export default CuadroDoctores;