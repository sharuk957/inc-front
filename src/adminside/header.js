import react from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import '../App.css'
function Header(props) {
    return (
    <div className="content">
        <ReactBootstrap.Row>
            <ReactBootstrap.Col>
                <h2>props.headline</h2>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col>
                <a>alert</a>
            </ReactBootstrap.Col>
        </ReactBootstrap.Row>
    </div>
    )
}

export default Header;