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
        <Route index path='/reactwebsite' element={<Home/>}/>
        <Route index path='/reactwebsite/about' element={<About/>}/>
        <Route index path='/reactwebsite/portfolio' element={<Portfolio/>}/>        
        <Route index path='/reactwebsite/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
