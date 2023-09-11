import './App.css';
import AboutUs from './components/AboutUs';
import Benefits from './components/Benefits';
import Client from './components/Client';
import Features from './components/Features';
import JoinUs from './components/JoinUs';
import NavBar from './components/NavBar';
import Section1 from './components/Section1';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Section1/>
      <Client/>
      <AboutUs/>
      <Features/>
      <JoinUs/>
      <Benefits/>
    </div>
  );
}

export default App;
