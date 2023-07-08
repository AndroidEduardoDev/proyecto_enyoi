"use client"
import GlobalState from "@/GlobalState";
import { GlobalContext } from "@/glocal";
import Home from "@/pages/home";
import Login from "@/pages/login";
import Productos from "@/pages/productos";
import FormularioCrearProducto from "@/pages/productos-crear";
import React from "react"
import { Link, Outlet, Route, Routes, BrowserRouter, useNavigate } from "react-router-dom"


export default function App() {
  const context = GlobalState()
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos-crear" element={<FormularioCrearProducto />} />
          </Routes>
        </BrowserRouter>
    </div>


  )
}


