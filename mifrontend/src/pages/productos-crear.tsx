import "@/app/componentes/contenedores/contenedor-principal/contenedor-principal.css"
import BotonPrincipal from "@/app/componentes/formularios/boton_principal"
import  "@/app/componentes/formularios/css/boton_principal.css"
import InputText from "@/app/componentes/formularios/input_texto"
import "@/app/globals.css"
import { useState } from "react"
import axios from "axios"

export default function FormularioCrearProducto() {
    const [Nombre, setNombre] = useState('')
    const [Precio, setPrecio] = useState('')
    const [Imagen, setImagen] = useState('')
    const [Descripcio, setDescripcio] = useState('')
    const handleNombre = (e: string) => {
        setNombre(e)
    }
    const handlePrecio = (e: string) => {
        setPrecio(e)
    }
    const handleImagen = (e: string) => {
        setImagen(e)
    }
    const handleDescripcio = (e: string) => {
        setDescripcio(e)
    }
    const registrarProducto = () => {
        axios.post("http://localhost:3001/productos", {
            precio: Precio,
            nombre: Nombre,
            descripcion: Descripcio,
            imagen: Imagen
        }).then((response) => {
            console.log(response)
        })
    }


    return (
        <div className="container">
            <div className="contenedor-principal offset-md-4">
                <div className="panel-body">
                    <center><h1 className="card-title">Crear Producto</h1></center>
                    <br />
                    <InputText hint="Nombre" id="nombre" type="text" handleInput={handleNombre} />
                    <InputText hint="Imagen" id="imagen" type="text" handleInput={handleImagen} />
                    <InputText hint="Descripcion" id="descripcion" type="text" handleInput={handleDescripcio} />
                    <InputText hint="Precio" id="precio" type="text" handleInput={handlePrecio} />
                    <br />
                    <BotonPrincipal texto="Registrar producto" callBack={registrarProducto} />
                    
                </div>
            </div>
        </div>
    )
}