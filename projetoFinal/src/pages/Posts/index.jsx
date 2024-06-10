import { useForm } from "react-hook-form";
import "./style.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const validationPost = yup.object().shape({
  usuario: yup
    .string()
    .required("Usuário Obrigatório")
    .max(100, "Usuário deve ter no máximo 100 caracteres"),
  titulo: yup
    .string()
    .required("Título Obrigatório")
    .max(40, "Título deve ter no máximo 40 caracteres"),
  descricao: yup
    .string()
    .required("Descrição Obrigatória")
    .max(100, "Descrição deve ter no máximo 100 caracteres"),
  nota: yup.number().required("Nota Obrigatória").min(0).max(10),
});

function Posts() {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  const addPost = (data) =>
    axios
      .post("http://localhost:8080/publicacao", data)
      .then(() => {
        console.log("Deu tudo certo");
        navigate("/");
      })
      .catch(() => console.log("Problemas na requisição"));

  return (
    <div>
      <Sidebar />
      <main>
        <div className="card-post">
          <h1>Criar Postagem</h1>
          <hr />
          <form onSubmit={handleSubmit(addPost)}>
            <div className="fields">
              <label htmlFor="usuario">Usuário da Postagem</label>
              <input type="text" id="usuario" {...register("usuario")} />
              <p className="error-message">{errors.usuario?.message}</p>

              <label htmlFor="titulo">Título do Livro</label>
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
              <input type="number" id="nota" {...register("nota")} />
              <p className="error-message">{errors.nota?.message}</p>

              <div className="btn-post">
                <button type="submit">Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Posts;
