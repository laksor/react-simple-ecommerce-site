import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Orders from './Components/Orders/Orders';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Shop></Shop>}></Route>
      <Route path='/shop' element={<Shop></Shop>}></Route>
      <Route path='/orders' element={<Orders></Orders>}></Route>
      <Route path='/inventory' element={<Inventory></Inventory>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
