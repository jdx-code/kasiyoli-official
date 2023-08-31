import galleryDB from '../galleryDB'

const Image = () => {
    return (
        <>
            <div className="container">                
                <div class="row row-cols-1 row-cols-md-3 g-5 flex justify-center my-24">                
                    {galleryDB.map((item) => {
                        return(
                            <div class="col border-4 rounded-lg border-blue-400 mx-4">                                                                
                                <div class="card h-100">
                                    <a href={item.image} data-fancybox="gallery" data-caption="Caption #2">
                                        <img src={item.image} />
                                    </a>
                                    <div class="card-body">
                                        <h5 class="card-title">{item.name}</h5>
                                        <p class="card-text">
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                        </p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                            </div> 
                        )                            
                    })
                }                                       

                </div>
            </div>
                 
        </>
    )
}

export default Image 