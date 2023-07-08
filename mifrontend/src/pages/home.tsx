import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "@/app/globals.css"
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();
  
  const [datos, setDatos] = useState([{ id: 1, nombres: "", apellidos: "", correo: "" }])
  const renderPost = async () => {
    await axios.get(`http://localhost:3001/usuarios`)
      .then(function (response) {
        console.log(response.data);
        setDatos(response.data)
      })
      .catch(function (error) { console.log(error); });
  }
  React.useEffect(() => {
    renderPost()
  },[])
  const tabla = datos.map((number) =>
    <tr key={number.id}>
      <td>{number.apellidos}</td>
      <td>{number.nombres}</td>
      <td>{number.correo}</td>
    </tr>
  )
  return (
    <div className="container">
      <div className='offset-md-4'>
        <a  onClick={()=>{router.push("productos")}}>Hola</a>
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>HOLA</th>
              <th><button onClick={() => router.push('/login')}>HOLLAAAA</button></th>
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

