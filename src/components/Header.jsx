import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const history = useHistory();

  const handleGoToHome = () => {
    history.push('/');
  };

  return (
    <header>
      <nav>
        <ul className="menu">
          <button onClick={handleGoToHome} className="logo">
            SebasJuarez
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
