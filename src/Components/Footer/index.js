import React from 'react';
import endereco from '../assets/icones/endereco.png'
import telefone from '../assets/icones/telefone.png'
import calendario from '../assets/icones/calendario.png'



export default function Footer(){
  return (
    <footer>
      <div className="Container1">
        <div>
          <h2>Entre em contato conosco:</h2>
        </div>
        <div>
          <a href="#">
            <img src={endereco} alt="endereço"/>
            <p>Endereço Av. 123, 222 - Rio de Janeiro RJ</p>
          </a>

        </div>
        <div>
        <a href="#">
            <img src={telefone} alt="telefone"/>
            <p>Cel: 55210000000000</p>
          </a>
        </div>
        <div>
        <a href="booking.com">
            <img src={calendario} alt="calendario"/>
            <p>Faça sua reserva pelo Booking.com</p>
          </a>
        </div>
      </div>
      <div className="Container2">
        <p>c Copyright- PousadaDev</p>
      </div>


    </footer>
  );
}