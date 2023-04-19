import './App.scss';
import { Route, useNavigate, Routes} from 'react-router-dom';
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
import { EditWatch } from './Components/Product/Edit/EditWatch';
import { ShoppingCart } from './Components/ShoppingCart/ShoppingCart';
import { Loader } from './Components/Loader/Loader';
import { WatchContext } from './Contexts/watchContetx';
import { AuthContext } from './Contexts/authContext';
import { useLocalStorage } from './Hooks/useLocalStorage';
import Logout from './Components/Authentication/Logout';
import { UserPage } from './Components/UserPage/UserPage';



function App() {

  const [watches, setWatches] = useState([]);
  const [auth, setAuth] = useLocalStorage('auth');

  const navigate = useNavigate();


  const userLogin = (authData) => {
    setAuth(authData);
  };

  const userLogout = () => {
      setAuth({});  
  };


  const watchAdd = (watchData) => {
    setWatches(state => [
        ...state,
        watchData,
    ]);

    navigate('/catalog');
};



const watchEdit = (watchId, watchData) => {
    setWatches(state => state.map(x => x._id === watchId ? watchData : x));
}
const watchRemove = (watchId) => {
    setWatches(state => state.filter(x => x._id !== watchId));
}

  useEffect(()=>{
     watchService.getAll()
      .then(result => {
          setWatches(result);
      })
  },[])


  return (
	<AuthContext.Provider value= {{user: auth, userLogin, userLogout}}>
		<div className="App">
			<Loader/>
			<Header></Header>

			<WatchContext.Provider value={{watches: watches, watchAdd, watchEdit, watchRemove}}>
			<Routes>
			<Route path='/' element = {<HomePage/>} />
			<Route path='/catalog' element = {<Catalog watches = {watches}/>} />
			<Route path='/watches/create' element = {<CreateWatch/>} />
			<Route path='/watches/:watchId' element = {<WatchDetails/>} />
			<Route path='/watches/:watchId/edit' element = {<EditWatch />} />
			<Route path='/register' element = {<Register/>} />
			<Route path='/login' element = {<Login/>} />
			<Route path='/logout' element = {<Logout/>} />
			<Route path='/user' element = {<UserPage/>} />
			<Route path='/user/shoppingcart' element = {<ShoppingCart/>} />

			</Routes>

			</WatchContext.Provider>

			<Footer></Footer>
		</div>
	</AuthContext.Provider>
  );
}

export default App;
