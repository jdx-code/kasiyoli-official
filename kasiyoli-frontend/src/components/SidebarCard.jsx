const SidebarCard = (props) => {
    return(
        <>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3 g-5 flex justify-center my-2">
                    <div class="col">
                        {props.img ? (
                        <img src={props.img} />
                        ) : (
                        <div class="card h-100">
                            <div class="card">
                                <div class="card-body elegant-color white-text rounded-bottom">
                                    <h4 class="card-title">{props.title ? props.title : 'hahhaha'}</h4>
                                    <hr class="hr-light" />

                                    <br />
                                    <p class="card-text white-text mb-4">
                                    {props.content ? ( 
                                        <p>{props.content}</p> 
                                    ) : (
                                        <div class="input-group">
                                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                            <button type="button" class="btn btn-outline-primary">search</button>
                                        </div> 
                                    ) }
                                    </p>
                                    
                                    <a href="#!" class="white-text d-flex justify-content-end">
                                    <h5>Read more <i class="fas fa-angle-double-right"></i></h5>
                                    </a>
                                </div>
                            </div>  
                        </div>
                        )}                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarCard