import {Routes, Route} from 'react-router-dom'
import Home from './Containers/Home';
import About from './Containers/About';
import Portfolio from './Containers/Portfolio';
import Contact from './Containers/Contact';
import Skills from './Containers/Skills';
import NavBar from './Components/NavBar';
import "./global.scss"; 

function App() {
  return (
    <div className="App">
      {/*navbar**/}
      <NavBar/>
      {/*Main page content**/}
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route index path='/about' element={<About/>}/>
        <Route index path='/portfolio' element={<Portfolio/>}/>
        <Route index path='/contact' element={<Contact/>}/>
        <Route index path='/Skills' element={<Skills/>}/>
      </Routes>
    </div>
  );
}

export default App;
