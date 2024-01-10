import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Body from './components/Body';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

import "../src/assets/js/main"
import Projectinmind from './components/Projectinmind';
import Service from './components/Service';


function App() {
  return (
    <>
    <Router>

    <Navbar />
    <Body />
    <Service/>
    <Portfolio />
    
    <Projectinmind />
    <Contact />
    <Footer />
 
    </Router>
    </>
  );
}

export default App;
