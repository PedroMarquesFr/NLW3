import React from 'react';
import { Link } from 'react-router-dom';

import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanagesMap.css';

import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
      <Map
        center={[-3.6877076, -40.3552773]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
