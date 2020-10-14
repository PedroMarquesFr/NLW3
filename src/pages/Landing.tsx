import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';
import logoImg from '../images/logo.svg';
import { FiArrowRight } from 'react-icons/fi';

function Landing() {
  return (
    <div className="App" id="pages-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muita criancas</p>
        </main>

        <div className="location">
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
