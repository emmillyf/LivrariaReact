import { Link } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";

function Ranking() {
  const [ranking, setRanking] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/publicacao")
      //.get("https://666253c262966e20ef0840ba.mockapi.io/publicacao")
      .then((response) => {
        // Extrai apenas o título e a nota dos posts
        const postsData = response.data.map((post) => ({
          titulo: post.titulo,
          nota: post.nota,
        }));
        // Ordena os posts pelo valor da nota em ordem decrescente
        const sortedRanking = postsData.sort((a, b) => b.nota - a.nota);
        setRanking(sortedRanking);
      })
      .catch(() => console.log("Erro na requisição!"));
  }, []);

  return (
    <div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <main>
        <div className="fundo">
      {isOpen ? <div className="empt-div" />: ''}
        <div className="ranks">
          <h1>Ranking de Livros</h1>
          {ranking.map((post, index) => (
            <div className="rank" key={index}>      
                <h2>{post.titulo}</h2>            
              <div className="line" />
              <p><b>Nota: {post.nota}</b></p>    
            </div>
          ))}
        </div>
      </div>
      </main>
    </div>
  );
}

export default Ranking;
