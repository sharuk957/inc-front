import react from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import {Link} from 'react-router-dom'
function NavbarContent(){
    return(
    
        <div className="sidebar">
        <a><img className="mx-auto" src="https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png" width="150px" height="200px"/></a>
        <Link style={{textDecoration:'none'}} className="active" to="/admin_panel/applicationlist" >Application list</Link>
        <Link style={{textDecoration:'none'}}  to="/admin_panel/recordtrack" >Record Track</Link>
        <Link style={{textDecoration:'none'}}  to="/admin_panel/bookingslot" >Booking Slots</Link>
        <Link style={{textDecoration:'none'}}  to="/admin_panel" >Logout</Link>
</div>
    
    )
    
}

export default NavbarContent