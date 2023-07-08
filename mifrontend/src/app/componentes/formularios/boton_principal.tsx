import React from "react";
import './css/boton_principal.css'


const BotonPrincipal = (props: { texto: string, callBack: Function }) => {
    return (
        <button type="button" className="form-control btn btn-primary" onClick={function(){props.callBack()}}>{props.texto}</button>
    );
}

export default BotonPrincipal;
