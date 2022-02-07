import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return <nav className={s.nav}>
        <div >
            <NavLink to='/Profile' className = { xx => xx.isActive ? s.active : s.item }>Profile</NavLink>
        </div>
        <div>
            <NavLink to='/Dialogs' className = { xx => xx.isActive ? s.active : s.item }>Messages</NavLink>
        </div >
        <div >
            <NavLink to='/News' className = { xx => xx.isActive ? s.active : s.item } >News</NavLink>
        </div>
        <div >
            <NavLink to='/Music' className = { xx => xx.isActive ? s.active : s.item }>Music</NavLink>
        </div>
        <div >
            <NavLink to='/Settings' className = { xx => xx.isActive ? s.active : s.item }>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;