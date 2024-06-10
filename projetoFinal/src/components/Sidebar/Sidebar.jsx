import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import { IoAddCircleOutline } from "react-icons/io5";
import { LuTrophy } from "react-icons/lu";
import { CgFeed } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import './Sidebar.css';

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
        <span className={`menu-text ${isOpen ? 'show' : 'hide'}`}>Home</span>
      </div>
      <div className="menu-item">
        <CgFeed className="icon" />
        <span className={`menu-text ${isOpen ? 'show' : 'hide'}`}>Feed</span>
      </div>
      <div className="menu-item">
        <IoAddCircleOutline className="icon" />
        <span className={`menu-text ${isOpen ? 'show' : 'hide'}`}>Adicionar novo Post</span>
      </div>
      <div className="menu-item">
        <FaCode className="icon" />
        <span className={`menu-text ${isOpen ? 'show' : 'hide'}`}>Desenvolvedores</span>
      </div>
      <div className="menu-item">
        <LuTrophy className="icon" />
        <span className={`menu-text ${isOpen ? 'show' : 'hide'}`}>Ranking</span>
      </div>
    </div>
  );
};

export default Sidebar;
