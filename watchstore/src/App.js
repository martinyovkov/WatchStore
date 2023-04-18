import './App.scss';
import { Router, Route, useNavigate, Routes} from 'react-router-dom';
import * as watchService from './Services/watchService';
import { useEffect, useState } from "react";

import { Catalog } from './Components/Catalog/Catalog';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { HomePage } from './Components/HomePage/HomePage';
import { WatchDetails } from './Components/Product/Details/WatchDetails';
import { Register } from './Components/Authentication/Register';
import { Login } from './Components/Authentication/Login';
import { CreateWatch } from './Components/Product/Create/CreateWatch';
import { ShoppingCart } from './Components/ShoppingCart/ShoppingCart';
import { Loader } from './Components/Loader/Loader';
import { WatchContext } from './Contexts/watchContetx';



function App() {

  const [watches, setWatches] = useState([]);

  useEffect(()=>{
     watchService.getAll()
      .then(result => {
          setWatches(result);
      })
  },[])


  return (
    <div className="App">
        <Loader/>
        <Header></Header>

        <WatchContext.Provider value={{watches}}>
        <Routes>
          <Route path='/' element = {<HomePage/>} />
          <Route path='/catalog' element = {<Catalog watches = {watches}/>} />
          <Route path='/watches/create' element = {<CreateWatch/>} />
          <Route path='/watches/:watchId' element = {<WatchDetails/>} />
          <Route path='/register' element = {<Register/>} />
          <Route path='/login' element = {<Login/>} />
          <Route path='/user/shoppingcart' element = {<ShoppingCart/>} />

        </Routes>

        </WatchContext.Provider>

        <Footer></Footer>
    </div>
  );
}

export default App;
