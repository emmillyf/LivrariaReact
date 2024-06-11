import { useForm } from "react-hook-form";
import "./style.css";
import Header from "../../components/Header";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const validationPost = yup.object().shape({
  titulo: yup
    .string()
    .required("Título Obrigatório")
    .max(40, "precisa ter 40 caracteres no máximo !"),
  descricao: yup
    .string()
    .required("Descrição Obrigatório")
    .max(100, "precisa ter 100 caracteres no máximo !"),
  nota: yup.number().required("Nota Obrigatório").max(10, "a nota maxima é 10"),
  usuario: yup.string().required("Usuário Obrigatório"), // Adicionando validação para o campo usuario
});

function Update() {
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    console.log (id)
    axios
      .get(`http://localhost:8080/publicacao/${id}`)
      .then((response) => {
        reset(response.data);
      })
      .catch(() => console.log("Erro na requisição!"));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationPost) });

  const addPost = (data) =>
    axios
      .put(`http://localhost:8080/publicacao/${id}`, {
        // Inclua todos os campos, exceto dataCriacao
        titulo: data.titulo,
        descricao: data.descricao,
        nota: data.nota,
        usuario: data.usuario,
      })
      .then(() => {
        console.log("Deu tudo certo");
        navigate("/feed");
      })
      .catch(() => console.log("Problemas na requisição"));
  return (
    <div>
      <Header />
      <main>
        <div className="card-post">
          <h1>Editar Postagem</h1>
          <hr />
          <form onSubmit={handleSubmit(addPost)}>
            <div className="fields">
              <label htmlFor="titulo">Titulo do livro</label>
              <input type="text" id="titulo" {...register("titulo")} />
              <p className="error-message">{errors.titulo?.message}</p>

              <label htmlFor="descricao">Descrição</label>

              <textarea
                id="descricao"
                rows="10"
                cols="30"
                type="text"
                {...register("descricao")}
              />
              <p className="error-message">{errors.descricao?.message}</p>
              <label htmlFor="nota">Nota</label>
              <input type="num" id="nota" {...register("nota")} />
              <p className="error-message">{errors.nota?.message}</p>

              <label htmlFor="usuario">Usuário</label>
              <input type="text" id="usuario" {...register("usuario")} />
              <p className="error-message">{errors.usuario?.message}</p>

              <div className="btn-post">
                <button>Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Update;
