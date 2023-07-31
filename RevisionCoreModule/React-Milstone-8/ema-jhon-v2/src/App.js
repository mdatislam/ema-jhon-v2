//import logo from './logo.svg';
import './App.css';
import Login from './Components/AuthFiles/Login';
import RequireAuth from './Components/AuthFiles/RequireAuth';
import Shipment from './Components/AuthFiles/Shipment';
import SignUp from './Components/AuthFiles/SignUp';
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
        <Route path='/Shipment' element={<RequireAuth>
          <Shipment/>
        </RequireAuth>}/>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>


      </Routes>

    </div>
  );
}

export default App;
