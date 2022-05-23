import React from 'react';
import Swal from 'sweetalert';

const DatosCitasPaciente = ({Cita}) => {
    const mostrarAlerta = ()=>{
        Swal({
            title: "Alerta!",
            text: "¿Desea Borrar esta cita?",
            buttons: ["Cancelar", "Aceptar"]
        }).then(response=>{
            if(response){
                borrarCita();
                Swal({
                    text: "Cita eliminada correctamente!", 
                    icon: "success", 
                    showConfirmButton: false, 
                    timer:2000
                });
            }
        })
    }
    function borrarCita(){
        //DELETE
        
    }
    return (
        <div className='Contenedor-Doctor'>
            <div className='Contenedor-texto-Calificacion'>
                <p>Doctor: {Cita.nombre} {Cita.apellido}</p>
                <p>Fecha: {Cita.fecha}</p>
                <p>Hora: {Cita.hora}</p>
                <button 
                    className="btn btn-outline-danger"
                    onClick={()=>mostrarAlerta()}
                >
                    Borrar
                </button>
            </div>
        </div>
  )
}
export default DatosCitasPaciente;