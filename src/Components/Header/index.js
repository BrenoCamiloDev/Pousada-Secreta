import React from 'react';
import './style.css'

export default function Header () {
  return(
    <div className="TOPO">
      <div>
        <h1>Pousada <span> Secreta</span></h1>
      </div>
        <ul>
          <li>
            <a href="#">Cadastro/Login</a>
          </li>
          <li>
            <a href="#">SOBRE</a>
          </li>
          <li>
            <a href="#">ROTA</a>
            </li>
          <li>
            <a href="#">QUARTOS</a> 
          </li>
        </ul>
      
    </div>
  );
}