import './App.scss';
import { Router, Route, useNavigate, Routes} from 'react-router-dom';
import { Catalog } from './Components/Catalog/Catalog';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { HomePage } from './Components/HomePage/HomePage';
import { WatchDetails } from './Components/Product/Details/WatchDetails';
import { Register } from './Components/Authentication/Register';
import { Login } from './Components/Authentication/Login';
import { CreateWatch } from './Components/Product/Create/CreateWatch';


function App() {
  return (
    <div className="App">
        <Header></Header>

        <Routes>
          <Route path='/' element = {<HomePage/>} />
          <Route path='/catalog' element = {<Catalog/>} />
          <Route path='/watches/create' element = {<CreateWatch/>} />
          <Route path='/watches' element = {<CreateWatch/>} />
          <Route path='/register' element = {<Register/>} />
          <Route path='/login' element = {<Login/>} />
        </Routes>

        <Footer></Footer>
    </div>
  );
}

export default App;
