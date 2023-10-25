import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './AppStyles.scss'


import SideBar from './SideBar';

import Home from './pages/home';
import Registroasistencia from './pages/RegistroAsistencia';
import Registrotrabajadores from './pages/RegistroTrabajadores';




function App() {
    return (
        <div>
        <BrowserRouter>

        <div className="flex">
          <SideBar />
          <div className="component">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/registrotrabajadores' element={<Registrotrabajadores/>} />
              <Route path='/registroasistencia' element={<Registroasistencia/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
    );
}

export default App;

if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
