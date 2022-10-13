import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './NavBar.css'

const NavBar = ({setPreview}) => {

    return (
    <NavHeader>
        <NavLink 
        to='/nathaniel-portfolio/'
        className='nav-link'
        onMouseEnter={() => setPreview('home')}
        >
        Home
        </NavLink>
        <NavLink
        to='/tobys-angels/'
        className='nav-link'
        onMouseEnter={() => setPreview('python')}
        >
        Toby's Angels Vet Management
        </NavLink>
        <NavLink
        to='/devils-grip/'
        className='nav-link'
        onMouseEnter={()=>setPreview('jScript')}
        >
        Devils Grip: A Solitaire Game
        </NavLink>
        <NavLink
        to="/caledonia/"
        className="nav-link"
        onMouseEnter={()=>setPreview('java')}
        >
        Caledonia: A Deck Building Roguelike
        </NavLink>
        <NavLink
        to='/about/'
        className='nav-link'
        onMouseEnter={()=>setPreview('about')}
        >
        About
        </NavLink>
        <NavLink
        to='/contact/'
        className='nav-link'
        onMouseEnter={()=>setPreview('contact')}
        >
        Contact
        </NavLink>
    </NavHeader>
  )
}

const NavHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 5vh;
  background-color: black;
`;

export default NavBar