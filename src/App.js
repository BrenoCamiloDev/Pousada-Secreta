import react from 'react';
import Header from './Components/Header';
import HomePage from './Components/Home';
import Bedroom from './Components/Quartos'
import Rota from './Components/Rota';
import Sobre from './Components/Sobre'
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Bedroom />      
      <Rota/>
      <Sobre/>
      <Footer/>
    </div>
  );
}

export default App;
