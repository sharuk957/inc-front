import react from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import Newlist from './newlist';
import Pendinglist from './pendinglist';

function Applicationlist(props) {
    return(
        <div>
            <Newlist Companyname="abc" CompanyDetails="dfg"/>
            <Pendinglist Companyname="abc" CompanyDetails="dfg" />
        </div>
    )
    
}

export default Applicationlist;