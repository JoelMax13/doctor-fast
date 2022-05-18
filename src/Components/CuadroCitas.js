import React from 'react'

const CuadroCitas = ({Cita}) => {
    function borrarCita(){
        //DELETE
    }
    return (
        <div className='Contenedor-Doctor'>
            <p className=''>Doctor: </p>
            <p className=''>Fecha: </p>
            <p className=''>Hora: </p>
            <button 
                className="btn btn-outline-danger"
                onClick={borrarCita}
            >
                Borrar
            </button>
        </div>
  )
}
export default CuadroCitas;