import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './style.css';

function HeaderFeed() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Atualiza a classe do body para aplicar o tema
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>Livro & Cia</h1>
        </div>
        
        <div className="btn-newPost">
          <Link to={"/posts"}>
            <button>Adicionar Novo Post</button>
          </Link>
        </div>
        
        <div className="rankingg">
          <Link to={"/ranking"}>
            <button>Ranking</button>
          </Link>
        </div>
        
        <div className="toggle-theme">
          <button onClick={toggleTheme}>
            {darkMode ? "Modo Claro" : "Modo Escuro"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default HeaderFeed;
