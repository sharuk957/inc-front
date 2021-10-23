import react from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import '../App.css'
function Recordtrack(props){
    return(
        <div className="content">
            
            <ReactBootstrap.Table responsive>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Company Name</th>
                    <th>Company Details</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
                <tbody>
                <tr>
                    <td>{1}</td>
                    <td>{props.Companyname}</td>
                    <td>{props.CompanyDetails}</td>
                    <td><button>Open</button></td>
                    <td><button>Pending</button></td>
                </tr>
                </tbody>
            </ReactBootstrap.Table>`
        </div>
    )
}

export default Recordtrack;