import Header from './components/Common/Header';
import './App.css';
import MainComponent from './components/LandingPage/MainComponent';
import HomePage from './pages/Home';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import CoinPage from './pages/Coin';
import ComparePage from './pages/ComparePage';
import Watchlist from './pages/Watchlist';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/coin/:id' element={<CoinPage/>}/>
          <Route path='/compare' element={<ComparePage/>}/>
          <Route path='/watchlist' element={<Watchlist/>}/>

       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
