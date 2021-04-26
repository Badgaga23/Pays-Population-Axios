import React from 'react';
import { NavLink} from "react-router-dom"

const Nav = () => {
  return (
    <div className="nav">
      <NavLink exact to="/" activeClassName="nav-active">
        Accueil
      </NavLink>
      <NavLink exact to="a-propos" activeClassName="nav-active">
        À propos
      </NavLink>
    </div>
  );
};

export default Nav;