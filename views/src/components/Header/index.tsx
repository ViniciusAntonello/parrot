import React from 'react';
import logo2 from '../../assets/logo2.svg'



const Header: React.FC = () => {
  return (
    <header>
        <div>
            <img src={logo2} alt="parrot-logo" />
        </div>
        <nav>
            <h3>Olá, usuário |</h3>
            <p>sair</p>
        </nav>
    </header>
  );
}

export default Header;