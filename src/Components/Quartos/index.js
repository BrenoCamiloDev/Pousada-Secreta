import React from 'react';
import quartosolteiro2 from '../assets/quarto-solteiro2.jpg';
import quartocasal2 from '../assets/quarto-casal2.jpg';
import quartofamilia2 from '../assets/quarto-familia3.jpg';


export default function Bedroom (){
  return (
    <div className="bedrooms">

      <div className="bedroom-solteiro">
        <a href="#" alt="quarto de solteiro">
          <img src={quartosolteiro2}/>
          <h3>Quarto de solteiro</h3>
        </a>
      </div>
      <div className="bedroom-casal">
        <a href='#' alt='quarto de casal'>
          <img src={quartocasal2} />
          <h3>Quarto de Casal</h3>
        </a>
      </div>
      <div className="bedroom-familia">
        <a href='#'>
          <img src={quartofamilia2} alt="quarto de familia"/>
          <h3>Quarto de familia</h3>
        </a>
        
      </div>

    </div>
  );
}