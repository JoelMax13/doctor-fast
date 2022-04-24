import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from './Login';
import Registro from './Registro';
import RegistroDoctor from './RegistroDoctor';
import RegistroPaciente from './RegistroPaciente';
import InicioPaciente from './Paciente/InicioPaciente';
import InicioDoctor from './Doctor/InicioDoctor';


export default function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/registro' element={<Registro/>}/>
            <Route path='/registrodoctor' element={<RegistroDoctor/>}/>
            <Route path='/registropaciente' element={<RegistroPaciente/>}/>
            <Route path='/iniciopaciente' element={<InicioPaciente/>}/>
            <Route path='/iniciodoctor' element={<InicioDoctor/>}/>
          </Routes>
        </BrowserRouter>
  );
}