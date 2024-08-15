import logo from './logo.svg';
import './App.css';
import Home from './container/Home';
import Cartbill from './container/Cartbill';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div>


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cartbill/>} />
      </Routes>
    </div>
  );
}

export default App;
