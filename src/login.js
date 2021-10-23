import react from 'react';
import LeftField from './inputfield'
import * as ReactBootstrap from "react-bootstrap"
import './login.css';
import {Link} from 'react-router-dom'
function Login(props) {
    return(
        <div className="flex-container text-center">
        <div>
        <h1 >LOGIN</h1>
    <LeftField type="text" name="name" label="Name"/>
    <LeftField type="password" name="name" label="Password"/>
    <ReactBootstrap.Button variant="primary" type="submit">
    Submit
  </ReactBootstrap.Button>

  <div className="p-3"><Link style={{textDecoration:'none'}} to="/signup" > Create New account</Link></div>
 
    </div>
    </div>
    )
    
}
export default Login;