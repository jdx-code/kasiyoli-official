import '../Style.css'

const Sidebar = () => {
    return (
        <>
            <div class="sidebar">
                <a href="#home">Home</a>
                <a href="/category">Category</a>

                <div class="dropdown">
                    <a href="" class="dropdown-toggle" data-bs-toggle="dropdown">
                        Dropdown button
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>   
                </div>

                <a href="/gallery">Gallery</a>
                <a href="#about">About</a>
            </div>

        </>
    )
}

export default Sidebar