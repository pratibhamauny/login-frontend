import {BrowserRouter,NavLink, Route,Routes,} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import PremiumContent from './components/PremiumContent';
import Register from './components/Register';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
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
            <Route path="/register" element={<PublicRoute Component={Register}/>} />
            <Route path="/login" element={<PublicRoute Component={Login}/>}/>
            <Route path="/premium-content" element={<PrivateRoute Component={PremiumContent}/>}/>
            
</Routes>
          
        </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
