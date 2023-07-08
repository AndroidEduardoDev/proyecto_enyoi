"use client";
import React, { useContext, useState } from 'react';
import axios from 'axios';
import InputText from '@/app/componentes/formularios/input_texto';
import BotonPrincipal from '@/app/componentes/formularios/boton_principal';
import 'bootstrap/dist/css/bootstrap.css';
import '@/app/componentes/contenedores/contenedor-principal/contenedor-principal.css'
import "@/app/globals.css"
import { useRouter } from 'next/navigation'



export default function Login() {
  const router = useRouter()
  // React.useEffect(() => {
  //   if (sessionStorage.getItem("token") !== undefined) {
  //     router.push("home")
  //   }
  // }, [])

  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')

  function handleInput(valor: string, name: string) {
    if (name === "correo") {
      setCorreo(valor)
    } else {
      setContrasena(valor)
    }
  }

  const SessionDataStorage = (valor: string, name: string) => {
    sessionStorage.setItem(name, valor);
  };


  const login = async () => {
    axios.post(`http://localhost:3001/autenticacion/login`, {
      correo: correo,
      contrasena: contrasena
    })
      .then(function (response) {
        SessionDataStorage(response.data.access_token, "token")
        SessionDataStorage(response.data.nombre, "nombre")
        router.push("/home")
      })
      .catch(function (error) { });
  }
  return (

    <div className="container">

      <div className='contenedor-principal offset-md-4'>
        <img className='offset-md-5' src="https://img.freepik.com/vector-gratis/diseno-logotipo-degradado-colorido-letra_474888-2309.jpg" />
        <InputText id='correo' hint="Correo" type='text' handleInput={handleInput} />
        <br />
        <InputText id='contrasena' hint="Contraseña" type='password' handleInput={handleInput} />
        <br />
        <BotonPrincipal texto='Iniciar' callBack={()=>{
          login()
        }} />
      </div>
    </div>
  )
}
