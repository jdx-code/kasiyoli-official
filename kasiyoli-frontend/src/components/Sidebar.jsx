import '../Style.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <NavLink to="/dashboard">Home</NavLink>
                <NavLink to='/volume-manage'>Volume Manage</NavLink>
                <NavLink to="/category">Category</NavLink>
                <NavLink to='/sub-category'>Sub Category</NavLink>

                {/* <div className="dropdown">
                    <NavLink to="" className="dropdown-toggle" data-bs-toggle="dropdown">
                        Dropdown button
                    </NavLink>
                    <ul className="dropdown-menu">
                        <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                        <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                        <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
                    </ul>   
                </div> */}

                <NavLink to='/post-manager'>Post</NavLink>
                <NavLink to="/gallery-management">Gallery</NavLink>
                <NavLink to='/photo-manage'>Photo</NavLink>
                <NavLink to="#about">About</NavLink>
            </div>

        </>
    )
}

export default Sidebar