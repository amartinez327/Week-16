import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ResourcesPage from './components/ResourcesPage';
import FooterPage from './components/FooterPage';
import Navbar from './components/Navbar';
import {
  Routes,
  Route,
 } from 'react-router-dom'

function App() {//Here we have the routes that call in the Home page, About page and Resources page. 
  return (
   <div>
     
      <Navbar sticky="top" />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/About' element={<AboutPage />}/>
        <Route path='/Resources' element={<ResourcesPage />}/>
      </Routes>
      <FooterPage fixed="bottom" />
     
   </div>
  );
}
export default App;
