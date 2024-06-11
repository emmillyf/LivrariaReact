
import { Link } from "react-router-dom";
import LottiePlayer from "../../components/Lottie/Lottieplayer";
import './style.css';

function Home() {
  return (
    <div>
      <LottiePlayer />
      <div className="home-container">
        <h1>Livramento</h1>
        <img src="src/assets/owlBlack.png" alt="" className="livros" />
        <Link to={`/feed`}>
        <button className="home-button">Entrar</button>
        </Link>         
      </div>       
    </div>
  )
}

export default Home;