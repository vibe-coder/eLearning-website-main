import './App.css';
import AboutUs from './components/AboutUs';
import Benefits from './components/Benefits';
import BlogPost from './components/BlogPost';
import Client from './components/Client';
import Courses from './components/Courses';
import FAQs from './components/FAQs';
import Features from './components/Features';
import Footer from './components/Footer';
import JoinUs from './components/JoinUs';
import NavBar from './components/NavBar';
import Section1 from './components/Section1';
import teamImage from "./images/team.jpg"

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <NavBar/>
        <Section1/>
        <Client/>
        <AboutUs/>
        <Features/>
        <JoinUs imageURL= <img style={{objectFit:"cover", objectPosition: "center", width: "100%", height: "100%", position:"absolute", opacity:".1" }} src={teamImage} alt='team img' />/>
        <Benefits/>
        <Courses/>
        <BlogPost/>
        <FAQs/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
