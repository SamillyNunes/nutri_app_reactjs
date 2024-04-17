import React, { useEffect, useState } from "react";
import './Home.css';

function Home(){

  const [nutri, setNutri] = useState([]);

  // Quando o array de observacao esta vazio, carrega quando monta
  useEffect(()=>{

    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      
      fetch(url)
      .then((result)=>result.json())
      .then((json) => {
        console.log(json);
        setNutri(json);
      });
    }

    loadApi();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map(item => {
        return (
          <article key={item.id} className="post">
            <strong className="title">{item.titulo}</strong>
            <img src={item.capa} alt={item.title} />
            <p className="subtitle">
              {item.subtitulo}
            </p>
            <a className="accessBtn" > Acessar</a>

          </article>
        )
      })}

    </div>
  );
}

export default Home;