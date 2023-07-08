import axios from "axios"
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '@/app/componentes/contenedores/contenedor-principal/contenedor-principal.css'
import "@/app/globals.css"
import NavBar from "@/app/componentes/contenedores/navbar/navbar";


export default function Productos() {

    const [productos, setProductos] = useState([{ nombre: "", precio: "", imagen: "" }]);

    React.useEffect(() => {
        axios.get("http://localhost:3001/productos")
            .then((response) => {
                console.log(response)
                setProductos(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    },[])
    const tabla = productos.map((producto) =>
        <tr key={producto.nombre}>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td><img src={producto.imagen} /></td>
        </tr>
    )

    return (
        <div>
            <NavBar />
            <div className="container">
                <table className="table table-striped table-dark"   >
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tabla}

                    </tbody>
                </table>
            </div>
        </div>
    )

}