import { useForm } from "react-hook-form";
import "./style.css";
import Header from "../../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Rank() {  
  const { id } = useParams();
  let navigate = useNavigate();
  const [avaliacoes, setAvaliacoes] = useState([]);
  const { reset } = useForm();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/publicacao/${id}`)
      .then((response) => {
        reset(response.data);
      })
      .catch(() => console.log("Erro na requisição!"));
 

    axios
    .get(`http://localhost:8080/publicacoes`)
    .then((response) => {
      const classificacoes = response.data.sort((a, b) => b.nota - a.nota);
      setAvaliacoes(classificacoes);
    })
    .catch(() => console.log("Erro ao obter as avaliações!"));
  }, [id]);
  
  return (
    <div className="cardsbody">
      <Header />
        <div className="rank_card">
          <h1>Ranking de Livros</h1>
          <ul>
              {avaliacoes.map(avaliador => (
               <li key={avaliador.id}>
                <h2>{avaliador.titulo}</h2>
                <p>Nota:{avaliador.nota}</p>
               </li>
              ))}
          </ul>
      </div>
    </div>
  );
}

export default Rank;