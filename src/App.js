import logo from './logo.svg';
import './App.css';
import Tutorial from './components/Tutorial';
import Clock from './components/Clock.jsx';
import ClockHook from './components/ClockHook';
import Counter from './components/Counter';
import Saludo from './components/Saludo';
import Gato from './components/Gato';
const Look_Url = "https://www.tailslife.com/blog/wp-content/uploads/2018/04/adorable-animal-animal-photography-1022158.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          
          <Gato name="felix" look={Look_Url}/>
          <Gato name="Juancito" look="https://news.1242.com/wp-content/uploads/2018/02/tomcatDSC09005_TP_Vb.jpg"/>
      </header>
    </div>
  );
}

export default App;
