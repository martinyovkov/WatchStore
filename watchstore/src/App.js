import './App.scss';
import { Router, Route, useNavigate, Routes} from 'react-router-dom';
import { Catalog } from './Components/Catalog/Catalog';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { HomePage } from './Components/HomePage/HomePage';
import { WatchDetails } from './Components/Product/Details/WatchDetails';


function App() {
  return (
    <div className="App">
        <Header></Header>

        <Routes>
          <Route path='/' element = {<HomePage/>} />
          <Route path='/catalog' element = {<Catalog/>} />
          <Route path='/watches/:watchId' element = {<WatchDetails/>} />
        </Routes>

        <Footer></Footer>
    </div>
  );
}

export default App;
