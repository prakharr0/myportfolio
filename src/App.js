import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Particles from 'react-particles-js';
import AboutMe from './Components/AboutMe';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div> 
      <Particles
        params= {{
          particles:{
            number:{
              value: 40,
              density:{
                enabled:true,
                value_area:900
              }
            },
            shape:{
              type:'circle',
              stroke:{
                width:6,
                color:'#f9ab00'
              }
            }
          }
        }}
      />
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Education/>
      <Skills/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
