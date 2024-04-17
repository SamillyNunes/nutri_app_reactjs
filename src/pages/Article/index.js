import { useParams } from "react-router-dom";

function Article(){
    const {id} = useParams();

    return (
        <div>
            <h1>article </h1>

            <span>
                Meu artigo é o : {id}
            </span>
        </div>
    );
}

export default Article;