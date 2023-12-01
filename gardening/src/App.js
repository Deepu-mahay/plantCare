import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Master } from './layout/master';
import Home from './Components/home';
import Services from './Components/services';
import PlantInfo from './Components/plantInfo';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
       
            <Route path='/' element={<Master/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/service' element={<Services/>}/>
            <Route path='/plantInfo' element={<PlantInfo/>}/>
            </Route>

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
