import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cris1 } from './components/Cris1';
import { Cris2 } from './components/Cris2';
import { Cris3 } from './components/Cris3';
import { Cris4 } from './components/Cris4';
import { Cris5 } from './components/Cris5';
import { Cris6 } from './components/Cris6';


function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/Cris1' element={<Cris1 />} />
        <Route path='/Cris2' element={<Cris2 />} />
        <Route path='/Cris3' element={<Cris3 />} />
        <Route path='/Cris4' element={<Cris4 />} />
        <Route path='/Cris5' element={<Cris5 />} />
        <Route path='/Cris6' element={<Cris6 />} />
        </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
