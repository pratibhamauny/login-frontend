import {BrowserRouter,Switch,NavLink, Route,Routes,} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import PremiumContent from './components/PremiumContent';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <div className='header'>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="premium-content">Premium Content</NavLink>
        </div>
        <div className='content'>
          
            <Routes>
            <Route exact path="/" element={<Home/>}>Home</Route>
            <Route path="/register" element={<Register/>}>Register</Route>
            <Route path="/login" element={<Login/>}>Login</Route>
            <Route path="/premium-content" element={<PremiumContent/>}>Premium Content</Route>
            </Routes>
          
        </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
