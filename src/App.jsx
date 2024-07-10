import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cris1 } from './components/Cris1';
import { Cris2 } from './components/Cris2';
import { Cris3 } from './components/Cris3';
import { Cris4 } from './components/Cris4';
import { Cris5 } from './components/Cris5';
import { Cris6 } from './components/Cris6';
import { Navigation } from './components/Navigation';


function App() {


  return (
    <>
    <BrowserRouter>
    <div>

      <h1 id='title' className='text-center my-3'>Proyecto Galeria Cristiano Ronaldo</h1>
    </div>
      <Routes>
        <Route path='/Cris1' element={<Cris1 className="image-size"/>}/>
        <Route path='/Cris2' element={<Cris2 className="image-size"/>} />
        <Route path='/Cris3' element={<Cris3 className="image-size"/>} />
        <Route path='/Cris4' element={<Cris4 className="image-size"/>} />
        <Route path='/Cris5' element={<Cris5 className="image-size"/>} />
        <Route path='/Cris6' element={<Cris6 className="image-size"/>} />
        </Routes>
        <Navigation />
   </BrowserRouter>
    </>
  )
}

export default App
