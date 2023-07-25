//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Order from './Components/Order/Order';
import Shop from './Components/Shop/Shop';
import { Outlet, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/Shop' element={<Shop />}></Route>
        <Route path='/Order' element={<Order />}></Route>
        <Route path='/Inventory' element={<Inventory />}></Route>


      </Routes>

    </div>
  );
}

export default App;
