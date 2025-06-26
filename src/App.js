import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Video from './components/Navbar/Video';
import About from './components/Navbar/About';
import Service from './components/Navbar/Service';
import Best from './components/Navbar/Best';
import Do from './components/Navbar/Do';
import Contact from './components/Navbar/Contact';


function App() {
  return (
    <div className="App">
     <Navbar/>
    
      <Video/>
      <About/>
      <Service/>
      <Best/>
      <Do/>
      <Contact/>
      
    </div>
  );
}

export default App;
