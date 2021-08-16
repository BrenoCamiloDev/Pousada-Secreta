import React from 'react';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img5 from '../assets/img5.jpg'

export default function Sobre(){
  return(
    <div className='SobreContainer'>
      <div className="SobreTitle">
        <h2>SOBRE A POUSADA!</h2>
        <p>conheça um pouco sobre nossa pousada</p>
      </div>
      <div className='SobreQuartos'>
        <div className='Sobrepousada'>
          <h4>A pousada</h4>
          <p>
            a Pousada Dev dispõe de estacionamento privativo
            gratuito, piscina ao ar livre e bar
          </p>
          <img src={img1} height="100" />
        </div>
        <div className='Sobrepousada'>
          <h4>A alimentação</h4>
          <p>
            A Pousada serve café da manhã em estilo continental ou buffet. 
            Nossos restaurantes funcionam 24hrs.
          </p>
          <img src={img3} height="100" />
        </div>
        <div className='Sobrepousada'>
          <h4>Nossos quartos</h4>
          <p>
            Os quartos possuem TV de tela plana a cabo,
            cozinha compacta e área para refeições. Além, disso,
            as unidades da Pousada Dev contam com ar.
          </p>
          <img src={img2} height="100" />
        </div>
        <div className='Sobrepousada'>
          <h4>Recepção</h4>
          <p>
           Nossa recepção fica aberta 24hrs.
          </p>
          <img src={img5} height="100" />
        </div>
      </div>
    </div>
  );
}