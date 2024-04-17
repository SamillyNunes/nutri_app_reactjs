import React from "react";
import { Link } from "react-router-dom";

function Contact(){
    return (
        <div>
            <h1>Pagina Contato</h1>
            <span>Contato da empresa (dd) xxxxx-xxxx </span>
            <Link to="/" >Página inicial</Link><br/>
            <Link to="/sobre" >Página Sobre Nós</Link>
        </div>
    );
}

export default Contact;