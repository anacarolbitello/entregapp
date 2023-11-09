import React from "react";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro"
import Entrada from "../pages/Entrada/Entrada"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Inicial from "../pages/Inicial/Inicial";
import Perfil from "../pages/Perfil/Perfil";
import Playlist from "../pages/Playlist/Playlist";
import Segunda from "../pages/Segunda/Segunda"
import Terceira from "../pages/Terceira/Terceira"




function Rotas() {
    return (

        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route element={<Login />} path="login" />
                <Route element={<Cadastro />} path="cadastro" />
                <Route element={<Entrada />} path="entrada" />
                <Route element={<Inicial />} path="inicial" />
                <Route element={<Perfil />} path="perfil" />
                <Route element={<Playlist/>} path="playlist"/>
                <Route element={<Segunda/>} path="segunda"/>
                <Route element={<Terceira/>} path="terceira"/>
    
                
                
            </Routes>

        </BrowserRouter>

    )

}

export default Rotas
