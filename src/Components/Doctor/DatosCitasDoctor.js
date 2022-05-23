import React, {useState, useEffect} from "react";
import Modal from "../Paciente/Modal";
import styled from "styled-components";
import Swal from "sweetalert";

const DatosCitasDoctor = ({Cita}) => {
    const [estadoModal, cambiarEstadoModal] = useState(false);
    function guardarReceta(){
        const fecha = document.getElementById("fecha").value;
        const descripcion = document.getElementById("descripcion").value;
        if(fecha.length == 0 || descripcion.length == 0){
            Swal({
                title: "Error al crear receta!",
                text: "Debe llenar todos los campos",
                icon: "error", 
            });
        }else{
            Swal({
                title: "Receta creada correctamente!",
                icon: "success", 
            });
        }
        cambiarEstadoModal(!estadoModal);
    }

    return(
        <div className="Contenedor-Doctor">
            <div className='Contenedor-texto-Calificacion'>
                <div >
                    <div>
                        <p><strong>Cédula Paciente:</strong> {Cita.id}</p>
                        <p><strong>Nombre y Apellido:</strong> {Cita.nombre} {Cita.apellido}</p>
                        <p><strong>Fecha:</strong> {Cita.fecha}</p>
                        <p><strong>Hora:</strong> {Cita.hora}</p>
                        <p><strong>Dirección:</strong> {Cita.direccion}</p>
                    </div>
                    <div>
                        <button 
                            className="btn btn-outline-info"
                            onClick={()=>cambiarEstadoModal(!estadoModal)}
                        >
                            Crear Receta Médica
                        </button>
                    </div>
                </div>
            </div>
            <Modal
                estado={estadoModal}
                cambiarEstado={cambiarEstadoModal}
            >
                <EncabezadoModal>
                    <h2>Generar Receta Médica</h2>
                </EncabezadoModal>
                <form>
                    <p>Fecha:</p>
                    <input id="fecha" type={"text"} className="form-control"></input>
                    <p>Descripción:</p>
                    <textarea id="descripcion" type={"text"} className="form-control" aria-label="With textarea"></textarea>
                    <br/>
                    <button 
                        className="btn btn-outline-success"
                        onClick={guardarReceta}
                    >
                        Guardar Receta
                    </button>
                </form>
            </Modal>
        </div>
    );
}
export default DatosCitasDoctor;
const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h2{
        font-weight: 500;
        font-size: 20px;
        color: #1766DC;
    }
`;