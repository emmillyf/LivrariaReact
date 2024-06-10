
import LottiePlayer from "../../components/Lottie/Lottieplayer";
import './style.css';

function Home() {
  return (
    <div>
      <LottiePlayer />
      <div className="home-container">
        <h1>Livramento</h1>
        <img src="src/assets/pilha-de-livros.png" alt="" className="livros" />
        <button className="home-button">login</button>         
      </div>       
    </div>
  )
}

export default Home;