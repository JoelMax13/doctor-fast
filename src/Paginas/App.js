import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Login';
import Registro from './Registro';
import RegistroDoctor from './RegistroDoctor';
import RegistroPaciente from './RegistroPaciente';
import InicioDoctor from './Doctor/InicioDoctor';
import CitasDoctor from './Doctor/CitasDoctor';
import HistorialMedicoDoctor from './Doctor/HistorialMedicoDoctor';
import InicioPaciente from './Paciente/InicioPaciente';
import CitasPaciente from './Paciente/CitasPaciente';
import HistorialMedicoPaciente from './Paciente/HistorialMedicoPaciente';


export default function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/registro' element={<Registro/>}/>
            <Route path='/registrodoctor' element={<RegistroDoctor/>}/>
            <Route path='/registropaciente' element={<RegistroPaciente/>}/>
            <Route path='/iniciodoctor' element={<InicioDoctor/>}/>
            <Route path='/citasdoctor' element={<CitasDoctor/>}/>
            <Route path='/historialmedicodoctor' element={<HistorialMedicoDoctor/>}/>
            <Route path='/iniciopaciente' element={<InicioPaciente/>}/>
            <Route path='/citaspaciente' element={<CitasPaciente/>}/>
            <Route path='/historialmedicopaciente' element={<HistorialMedicoPaciente/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}