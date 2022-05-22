import React from 'react'

const DatosCitasPaciente = ({Cita}) => {
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
                    onClick={borrarCita}
                >
                    Borrar
                </button>
            </div>
        </div>
  )
}
export default DatosCitasPaciente;