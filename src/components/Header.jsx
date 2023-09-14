import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();

  const handleGoToHome = () => {
    history.push('/');
  };

  return (
    <header>
      <nav>
        <ul className="menu">
          <li onClick={handleGoToHome} className="logo">
            SebasJuarez
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
