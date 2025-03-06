import {Routes, Route} from 'react-router-dom'
import Home from './Containers/Home';
import About from './Containers/About';
import Portfolio from './Containers/Portfolio';
import Contact from './Containers/Contact';
import NavBar from './Components/NavBar';
import "./global.scss"; 

function App() {
  return (
    <div className="App">
      {/*navbar**/}
      <NavBar/>
      {/*Main page content**/}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>        
        <Route path='/contact' element={<Contact/>}/>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
