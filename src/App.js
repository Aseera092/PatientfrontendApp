import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addpatient from './components/Addpatient';
import Search from './components/Search';
import Viewall from './components/Viewall';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Addpatient/>}/>
      <Route path='/Search'element={<Search/>}/>
      <Route path='/Viewall'element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
