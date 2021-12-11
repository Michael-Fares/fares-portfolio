import './App.css';
import Router from './Router'
import {
  BrowserRouter 
} from "react-router-dom";

import Navigation from './components/Navigation'
import Hamburger from './components/Hamburger'



function App() {
  return (
   
  <BrowserRouter>
    <Navigation />
    <Hamburger />
    <Router />
  </BrowserRouter>
    
  );
}

export default App;
