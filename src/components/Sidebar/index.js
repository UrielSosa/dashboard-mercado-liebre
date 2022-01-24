import React from 'react';
import image from '../../assets/images/logo-ml.svg';
import {Link} from 'react-router-dom';

function Sidebar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-mercadoliebre sidebar color-mercadoliebre accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Mercado Liebre"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/last">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Ultimo producto</span>
                    </Link>
                </li>
                {/*<!-- Nav Item - search -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/search">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Buscador</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/metrics">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Metrics</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/tables">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>

        </React.Fragment>
    )
}
export default Sidebar;