import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './NavBar.css'

const NavBar = () => {
  return (
    <NavHeader>
        <NavLink 
        to='/'
        className='nav-link'
        >
        Home
        </NavLink>
        <NavLink
        to='/tobys-angels'
        className='nav-link'
        >
        Toby's Angels Vet Management
        </NavLink>
        <NavLink
        to='/devils-grip'
        className='nav-link'
        >
        Devils Grip: A Solitaire Game
        </NavLink>
        <NavLink
        to='/about'
        className='nav-link'
        >
        About
        </NavLink>
        <NavLink
        to='/contact'
        className='nav-link'>
        Contact
        </NavLink>
    </NavHeader>
  )
}

const NavHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 4vh;
  background-color: black;
`;

export default NavBar