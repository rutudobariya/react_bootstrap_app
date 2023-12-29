import React from 'react';
import  ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import ContainerApp from './Componet/ContainerApp';
import BtnApp from './Componet/BtnApp';
import HeaderApp from './Componet/HeaderApp';
import NavbarApp from './Componet/NavbarApp';
import HeroApp from './Componet/HeroApp';
import '../src/style.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render
(
    <React.StrictMode>
        {/* <ContainerApp/> */}
        {/* <BtnApp/> */}
     <HeaderApp/>
        <NavbarApp/>
        <HeroApp/> 
    </React.StrictMode>
)
