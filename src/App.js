import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Main from './Main/Main.js';
import { animals } from './data.js';

function App() {
  return (
    <div className="App">
      <Header greeting="Kyra's Animal Farm"/>
      <Main animals={animals} />
      <Footer email="christensen.kyral@gmail.com" />
    </div>
  );
}

export default App;
