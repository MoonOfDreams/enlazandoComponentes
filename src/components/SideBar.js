import React from 'react';
import image from '../assets/images/logo-DH.png';
import { Link } from "react-router-dom"
function SideBar() {
    /* <Route path="/" element={(<ContentRowTop />)} />
          <Route path="/genres" element={(<GenresInDb />)} />
          <Route path="/last" element={(<LastMovieInDb />)} />
          <Route path="/status" element={(<ContentRowMovies />)} /> */
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link to={"/"} className="sidebar-brand d-flex align-items-center justify-content-center"><div className="sidebar-brand-icon">
                    <img className="w-100" src={image} alt="Digital House" />
                </div></Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/"><i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span>
                    </Link>

                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/genres"><i className="fas fa-fw fa-folder"></i>
                        <span>Genres</span></Link>

                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/last">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Last Movie</span></Link>

                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/status">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Statistics</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}

        </React.Fragment>
    )
}
export default SideBar;