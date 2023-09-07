import './App.css';
import Client from './components/Client';
import NavBar from './components/NavBar';
import Section1 from './components/Section1';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Section1/>
      <Client/>
    </div>
  );
}

export default App;
