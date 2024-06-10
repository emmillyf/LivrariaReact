import { Link } from "react-router-dom";
import "./style.css";
import HeaderFeed from "../../components/HeaderFeed";
import { useEffect, useState } from "react";
import axios from "axios";

function Ranking() {
  const [ranking, setRanking] = useState([]);

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
      <HeaderFeed />
      <main>
        <div className="cards">
          <h1>Ranking de Livros</h1>
          {ranking.map((post, index) => (
            <div className="card" key={index}>
              <header>
                <h2>{post.titulo}</h2>
              </header>
              <div className="line" />
              <p>Nota: {post.nota}</p>
              
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Ranking;
