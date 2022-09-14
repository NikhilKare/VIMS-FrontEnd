
import './App.css';
// import Navbar from './Components/Navbar';
import Navbar from './Components/NavBar/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Components/Pages/Home';
import PolicyList from './Components/Pages/PolicyList';
import RegisterLogin from './Components/RegisterLogin';
// import Login from './Components/Login';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {

  return (
    <>  
    <Router>
    {/* <Navbar/> */}
    <Switch>
      <Route path="/" exact component={Home}/>
      {/* <Route path='/services' component={Signup}/> */}
      <Route path='/policies' component={PolicyList}/>
      <Route path='/sign-up-in' component={RegisterLogin}/>
    </Switch>
    </Router>
  
    </>
      
    
  );
}
export default App;
