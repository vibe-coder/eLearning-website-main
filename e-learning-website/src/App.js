import './App.css';
import AboutUs from './components/AboutUs';
import Benefits from './components/Benefits';
import BlogPost from './components/BlogPost';
import Client from './components/Client';
import Courses from './components/Courses';
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
      <Courses/>
      <BlogPost/>
    </div>
  );
}

export default App;
