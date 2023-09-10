const Image = (props) => {

    return (
        <>
            <div className="container">    
     
                <div class="row row-cols-1 row-cols-md-6 g-5 flex justify-center my-12">                
                    {props.data.map((item) => {
                        return(
                            <div class="col border-4 rounded-lg border-blue-400 mx-4">                                                                
                            <div class="card">
                                {item.file ? (
                                    <a href={item.file} data-fancybox="gallery" data-caption="Caption #2">
                                        <img src={item.file} />
                                    </a>
                                ):(
                                    <a href={item.image} data-fancybox="gallery" data-caption="Caption #2">
                                        <img src={item.image} />
                                    </a>
                                )}
                                {item.description ? (                              
                                    <div class="card-body">
                                        <h5 class="card-title">{item.description}</h5>
                                        <p class="card-text">
                                        </p>
                                    </div>
                                ):(
                                    <div class="card-body">
                                        <h5 class="card-title">{item.studentName}</h5>
                                        <p class="card-text">
                                        </p>
                                    </div>
                                )}

                                <div class="card-footer">
                                    <small class="text-muted"></small>
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