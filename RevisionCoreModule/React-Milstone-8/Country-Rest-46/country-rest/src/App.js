
import { Routes,Route } from 'react-router';
import './App.css';
import Countries from './component/Country/Countries';
import Footer from './component/Footer/Footer';

import Header from './component/Header/Header';
import CountyByName from './component/Country/CountyByName';

function App() {
  return (
    <div className="App">
      <Header></Header>
     
      <Routes>
        <Route path="/Country" element={<CountyByName/>}/>
        <Route path="/Home" element={<Countries/>}/>
      </Routes>
     
      <Footer></Footer>
      
    </div>
  );
}

export default App;
