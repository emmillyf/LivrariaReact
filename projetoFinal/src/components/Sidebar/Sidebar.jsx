import React, { useState, useEffect } from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import { IoAddCircleOutline } from "react-icons/io5";
import { LuTrophy } from "react-icons/lu";
import { CgFeed } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { CgDarkMode } from "react-icons/cg";
import './Sidebar.css'; // Certifique-se de que o caminho para o CSS está correto
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchTerm);

    //  adiciona a lógica de busca 
    const filtered = publicacoes.filter(publicacao => publicacao.titulo.toString().includes(searchTerm));
    setFilteredPublicacoes(filtered);
    console.log('Filtered Publicações:', filtered);
    
  };

  return (
    <div
      className={`container ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoIosArrowDropright /> : <IoIosArrowDropleft />}
        </div>
        <h2 className={`sidebar-title ${isOpen ? 'show' : 'hide'}`}>Livramento</h2>
        
        {/* Caixa de Pesquisa */}
        <form onSubmit={handleSearch} className="search-form">
          <input 
            type="text" 
            placeholder="Pesquisar..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            className={`search-input ${isOpen ? 'show' : 'hide'}`} 
          />
          <button type="submit" className="search-button">
            <FaSearch className="search-icon" />
          </button>
        </form>

        <div className="menu-item">
          <FaHome className="icon" />
          <Link to={`/`}>
            <span className={`menu-text ${isOpen ? 'show' : 'hide'}`}>Home</span>
          </Link>
        </div>
        <div className="menu-item">
          <CgFeed className="icon" />
          <Link to={`/feed`}>
            <span className={`menu-text ${isOpen ? 'show' : 'hide'}`}>Feed</span>
          </Link>
        </div>
        <div className="menu-item">
          <IoAddCircleOutline className="icon" />
          <Link to={`/posts`}>
            <span className={`menu-text ${isOpen ? 'show' : 'hide'}`}>Adicionar novo Post</span>
          </Link>
        </div>
        <div className="menu-item">
          <FaCode className="icon" />
          <Link to={`/Desenvolvedores`} className='no-style-change'>
            <span className={`menu-text ${isOpen ? 'show' : 'hide'}`}>Desenvolvedores</span>
          </Link>
        </div>
        <div className="menu-item">
          <LuTrophy className="icon" />
          <Link to={`/ranking`} className='no-style-change'>
            <span className={`menu-text ${isOpen ? 'show' : 'hide'}`}>Ranking</span>
          </Link>
        </div>
        <div className="menu-item">
          <CgDarkMode className="icon" />
          <span className={`menu-text ${isOpen ? 'show' : 'hide'}`}>
            <button className='toggle-theme' onClick={toggleTheme}>{darkMode ? "Modo Claro" : "Modo Escuro"}</button>
          </span>
        </div>
        <div className="logo-container">
          <img src="src/assets/owlBlack.png" alt="Logo" className={`logo ${isOpen ? 'show' : 'hide'}`} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
