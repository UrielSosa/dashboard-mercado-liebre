import React from 'react';

const Sidelink = ({route, }) => {
    return (
        <li className="nav-item active">
            <Link className="nav-link" to="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </Link>
        </li>
    );
}
 
export default Sidelink;