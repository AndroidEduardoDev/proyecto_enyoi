
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/globals.css"
import { useRouter } from "next/navigation";
import logoenyoi from "@/app/assets/gato.jpg"
import Image from "next/image";

export default function NavBar() {
    const router = useRouter();
    console.log(process.env["NEXT_PUBLIC_DB_HOST"]);

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" onClick={() => { router.push("") }}><Image src={logoenyoi} alt="Logo" /></a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" onClick={() => { router.push("productos") }}>Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => { router.push("usuarios") }}>Usuarios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => { router.push("home") }}>Home</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}