import React from "react";
import { Link } from "react-router-dom";

function About(){
    return (
        <div>
            <h1>Sobre!!</h1>
            <Link to="/" >Página inicial</Link><br/>
            <Link to="/contato" >Página de Contato</Link>
        </div>
    );
}

export default About;