import './App.scss';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { HomePage } from './Components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <HomePage></HomePage>
        <Footer></Footer>
    </div>
  );
}

export default App;
