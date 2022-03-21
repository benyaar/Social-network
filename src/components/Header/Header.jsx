import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header = (props) => {
    
    return <header className={s.header}>
        <img src='https://picsvg.com/example/owl.svg'/>
        <div className={s.blockRight}>
            {props.isAuth ? props.login :  <NavLink to={'/login'}>Login</NavLink>}
            l



        </div>
    </header>
}

export default Header;