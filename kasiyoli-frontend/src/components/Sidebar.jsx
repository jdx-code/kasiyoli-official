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

                <NavLink to='/post-manager'>Post</NavLink>
                <NavLink to="/gallery-management">Gallery</NavLink>
                <NavLink to='/photo-manage'>Photo</NavLink>
                <NavLink to="#about">About</NavLink>
            </div>

        </>
    )
}

export default Sidebar