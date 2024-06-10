import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import { IoAddCircleOutline } from "react-icons/io5";
import { LuTrophy } from "react-icons/lu";
import { CgFeed } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="toggle-btn" onClick={handleToggle}>
        {isOpen ? <IoIosArrowDropright/> : <IoIosArrowDropleft/>}
      </div>
      <h2 className={`sidebar-title ${isOpen ? 'show' : 'hide'}`}>Livramento</h2>
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
        <Link to={`/post`}>
        <span className={`menu-text ${isOpen ? 'show' : 'hide'}`}>Adicionar novo Post</span>
        </Link>
      </div>
      <div className="menu-item">
        <FaCode className="icon" />
        <Link to={`/sobre`} className='no-style-change'>
        <span className={`menu-text ${isOpen ? 'show' : 'hide'}`}>Desenvolvedores</span>
        </Link>
      </div>
      <div className="menu-item">
        <LuTrophy className="icon" />
        <Link to={`/ranking`} className='no-style-change'>
        <span className={`menu-text ${isOpen ? 'show' : 'hide'}`}>Ranking</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
