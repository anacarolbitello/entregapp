import React from "react";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import Entrada from "../pages/Entrada/Entrada"
import Inicial from "../pages/Inicial/Inicial";
import Perfil from "../pages/Perfil/Perfil"
import { BrowserRouter, Route, Routes } from "react-router-dom";


function Rotas(){
    return(

        <BrowserRouter>
        <Routes>
        <Route element={<Home/>} path="/Home"/>
        <Route element={<Login/>} path="/Login"/>
        <Route element={<Cadastro/>} path="/Cadastro"/>
        <Route element={<Entrada/>} path="/Entrada"/>
        <Route element={<Inicial/>} path="/Inicial"/>
        <Route element={<Perfil/>} path="/Perfil"/>
        </Routes>

        </BrowserRouter>

    )
        
}

export default Rotas
