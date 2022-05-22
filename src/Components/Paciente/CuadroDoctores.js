import React, {useState} from "react";
import Modal from "./Modal";
import axios from "axios";
import Calendar from "react-calendar/dist/umd/Calendar";
import 'react-calendar/dist/Calendar.css';

const CuadroDoctores = ({Doctor}) => {
    const [estadoModal, cambiarEstadoModal] = useState(false);
    const [date, setDate] = useState(new Date());
    const [lista, setLista] = useState([]);

    const uri = "https://doctorfastapi.herokuapp.com/doctor/horarios/";

    const onChange = date =>{
        setDate(date);
    }

    let doc = Doctor.id;
    let anio = date.getFullYear();
    let mes = date.getMonth();
    let dia = date.getDate();
    const fecha = anio+"-"+(mes+1)+"-"+dia;
    const uri2 = uri + fecha + "/" + doc;

    function mostrarHorarios(){
        document.getElementById("Horarios").style.display = "block";

        const getData = async () =>{
            const response = axios.get(uri2);
            return response;
        }

        getData().then((response)=>{
                setLista(response.data);
            })
    }

    const token = localStorage.getItem('user').replace('"','').replace('"','');

    function guardarCita(){
        let Hora = document.getElementById("horaOption").value;
        const uri3 = "https://doctorfastapi.herokuapp.com/paciente/cita";

        var data = JSON.stringify({
            "id_doctor": Doctor.id,
            "fecha": fecha,
            "hora": Hora
        });
        
        axios.post(uri3,data, {
            headers: {
                'token': token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            alert(response.data);
        })
        .catch((error) => {
            alert(error);
        });

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
                        onClick={mostrarHorarios}
                    >
                        Buscar
                    </button>
                </p>
                <div id="Horarios">
                    <p><strong>Horarios: </strong></p>
                    <select className="form-select">
                        {
                            lista.map((Hora)=>(
                                <option id="horaOption">
                                    {Hora}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <br/>
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