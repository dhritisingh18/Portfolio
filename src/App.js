import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { DisplayScreen } from './Components/DisplayScreen';
import {BrowserRouter,Router, Routes ,Route} from 'react-router-dom';
import { Home } from './Components/Home';
import About from './Components/About';
import { Skills } from './Components/Skills';
import { Parent } from './Components/Parent';


function App() {
  return (
    
      <BrowserRouter>
      <Routes>
      <Route path="/home"  exact element={<Home />} />
      <Route path="/about"  exact element={<About />} />
      <Route path="/skills"  component={ <Skills />} />
      <Route path="/" exact element={<DisplayScreen />} />
      </Routes>
      {/* <Parent /> */}
      </BrowserRouter>

   
    
     
    
  );
}

export default App;
