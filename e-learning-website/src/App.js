import './App.css';
import AboutUs from './components/AboutUs';
import Client from './components/Client';
import NavBar from './components/NavBar';
import Section1 from './components/Section1';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Section1/>
      <Client/>
      <AboutUs/>
    </div>
  );
}

export default App;
