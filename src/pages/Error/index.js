import { Link } from "react-router-dom";

function Error(){
    return (
        <div>
            <h2>Ops, parece que essa pagina nao existe!</h2>
            <Link to="/" > Voltar para página inicial</Link>
        </div>
    );
}

export default Error;