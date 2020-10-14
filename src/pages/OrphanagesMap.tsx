import React from 'react';
import { Link } from 'react-router-dom';

import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanagesMap.css';

import { FiPlus } from 'react-icons/fi';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} />

          <h2>Esscolha um arfanato no mapa</h2>
          <p>Muitas criancass estao esperando a sua visita</p>
        </header>
        <footer>
          <strong>Rio do Sul</strong>
          <span>Santa Catarina8</span>
        </footer>
      </aside>
      <div></div>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
