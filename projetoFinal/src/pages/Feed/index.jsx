import { Link } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";


function Feed() {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/publicacao")
      .then((response) => {
        // Ordenar as postagens pelo ID de forma decrescente (do maior para o menor)
        const sortedPosts = response.data.sort((a, b) => b.id - a.id);
        setPosts(sortedPosts);
      })
      .catch((error) => console.error("Erro na requisição:", error));
  }, []);

  function deletePost(id) {
    axios
      .delete(`http://localhost:8080/publicacao/${id}`)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((error) => console.error("Erro ao apagar o post:", error));
  }

  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>
        {isOpen ? <div className="empt-div" /> : ""}
        <div className="cards">
          {posts.map((post) => (
            <div className="card" key={post.id}>
              <header>
                <h2>{post.titulo}</h2>
              </header>
              <div className="line" />
              <p>{post.usuario}</p> {/* Nome do usuário sem rótulo */}
              <p>{post.descricao}</p>
              <p>{post.nota}</p>
              <div className="btns">
                <div className="btn-edit">
                  <Link to={`/update/${post.id}`}>
                    <button>Editar</button>
                  </Link>
                </div>
                <div className="btn-delete">
                  <button onClick={() => deletePost(post.id)}>Apagar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Feed;
