import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import "./style.css";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationPost = yup.object().shape({
  titulo: yup
    .string()
    .required("Título Obrigatório")
    .max(40, "precisa ter 40 caracteres no máximo !"),
  descricao: yup
    .string()
    .required("Descrição Obrigatório")
    .max(100, "precisa ter 100 caracteres no máximo !"),
  nota: yup
    .number()
    .required("Nota Obrigatório")
    .max(10, "a nota maxima é 10"),

     
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
      .post("https://666253c262966e20ef0840ba.mockapi.io/posts", data)
      .then(() => {
        console.log("Deu tudo certo");
        navigate('/');
      })
      .catch(() => console.log("Problemas na requisição"));

  return (
    <div>
      <Header />
      <main>
        <div className="card-post">
          <h1>Criar Postagem</h1>
          <hr />
          <form onSubmit={handleSubmit(addPost)}>
            <div className="fields">
              
              <label htmlFor="autor">Autor da postagem</label>
              <input type="text" id="autor" {...register("autor")} />
              <p className="error-message">{errors.autor?.message}</p>

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
export default Posts;
