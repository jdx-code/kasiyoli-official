import '../Style.css'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <a href="#home">Home</a>
                <a href='/volume-manage'>Volume Manage</a>
                <a href="/category">Category</a>
                <a href='/sub-category'>Sub Category</a>

                <div className="dropdown">
                    <a href="" className="dropdown-toggle" data-bs-toggle="dropdown">
                        Dropdown button
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>   
                </div>

                <a href='/post-manager'>Post</a>
                <a href="/gallery-management">Gallery</a>
                <a href='/photo-manage'>Photo</a>
                <a href="#about">About</a>
            </div>

        </>
    )
}

export default Sidebar