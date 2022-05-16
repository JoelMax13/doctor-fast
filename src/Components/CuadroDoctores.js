import React, {useState} from "react";
import Modal from "./Modal";
import Calendar from "react-calendar/dist/umd/Calendar";
import 'react-calendar/dist/Calendar.css';

const CuadroDoctores = ({Doctor}) => {
    const [estadoModal, cambiarEstadoModal] = useState(false);
    const [date, setDate] = useState(new Date());

    const onChange = date =>{
        setDate(date);
    }

    function buscarFecha(){

    }

    function guardarCita(){

        //Doctor.id
        //jwt
        //Fecha
        //Hora

        //POST

        cambiarEstadoModal(!estadoModal);
    }

    return (
        <div className="Contenedor-Doctor">
            <div className="info nav nav-pills">
                <div className="izq nav-item">
                    <i className="fa fa-user-md iIzq"></i>
                </div>
                <div className="centro nav-item">
                    <p className="Nombre-Doctor">{Doctor.nombre} {Doctor.apellido}</p>
                    <p className="Especialidad-Doctor">{Doctor.especialidad}</p>
                    <p className="Direccion-Doctor">{Doctor.direccion}</p>
                </div>
                <div className="der nav-item">
                    <button 
                        className="btn btn-outline-secondary BtnAgendar"
                        onClick={()=>cambiarEstadoModal(!estadoModal)}
                    >
                        Agendar
                    </button>
                </div>
            </div>
            <Modal 
                estado={estadoModal}
                cambiarEstado={cambiarEstadoModal}
            >
                <h3><strong>Doctor/a:</strong> {Doctor.nombre} {Doctor.apellido}</h3>
                <p><strong>Especialidad:</strong> {Doctor.especialidad}</p>
                <Calendar
                    onChange={onChange}
                    value={date}
                />
                <br/>
                <p><strong>Día:</strong> {date.toLocaleDateString()} 
                    <button 
                        className="btn btn-outline-success"
                        onClick={buscarFecha}
                    >
                        Buscar
                    </button>
                </p>

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