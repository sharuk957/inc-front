import './App.css';
import Register from './register'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import Login from './login'
import Signup from './Signup'
import NavbarContent from './adminside/navbar'
import Applicationlist from './adminside/applicationlist'
import Header from './adminside/header'
import Recordtrack from './adminside/recordtrack'
function App() {
  return (
    <div className="">
     
        <BrowserRouter>
        <Switch>
        <Route exact path="/">
            <Login />
          </Route>
        <Route exact path="/signup" >
            <Signup/>
          </Route>
        <Route exact path="/register" >
            <Register/>
          </Route>
          <Route exact path="/admin_panel" >
          <Login />
          </Route>
          <Route exact path="/admin_panel/applicationlist" >
            <NavbarContent/>
            <Header/>
            <Applicationlist/>
          </Route>
          <Route exact path="/admin_panel/recordtrack" >
            <NavbarContent/>
            <Header/>
            <Recordtrack/>
          </Route>
          <Route exact path="/admin_panel/bookingslot" >
            <NavbarContent/>
            <Header/>
          </Route>
        </Switch>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
