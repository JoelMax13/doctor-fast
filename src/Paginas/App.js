import React from 'react';
import { Route } from 'wouter';

import Login from './Login';
import InicioPaciente from './Paciente/InicioPaciente';
import InicioDoctor from './Doctor/InicioDoctor';

function App() {
  return (
    <div className="App">
      <Route component={InicioDoctor} path='/iniciodoctor'/>
      <Route component={Login} path='/login'/>
    </div>
  );
}

export default App;