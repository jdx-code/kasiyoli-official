const Image = (props) => {

    return (
        <>
            <div className="container">    
     
                <div className="row row-cols-1 row-cols-md-6 g-5 flex justify-center my-12">                
                    {props.data.map((item) => {
                        return(
                            <div className="col border-4 rounded-lg border-blue-400 mx-4">                                                                
                            <div className="card">
                                {item.file ? (
                                    <a href={item.file} data-fancybox="gallery" data-caption="Caption #2">
                                        <img src={item.file} className="card-img-top w-full h-72" />
                                    </a>
                                ):(
                                    <a href={item.image} data-fancybox="gallery" data-caption={item.studentName}>
                                        <img src={item.image} className="card-img-top w-full h-72" />
                                    </a>
                                )}
                                {item.description ? (                              
                                    <div className="card-body">
                                        <h5 className="card-title">{item.description}</h5>
                                        <p className="card-text">
                                        </p>
                                    </div>
                                ):(
                                    <div className="card-body">
                                        <h5 className="card-title">{item.studentName}</h5>
                                        <p className="card-text">
                                        </p>
                                    </div>
                                )}

                                <div className="card-footer">
                                    <small className="text-muted"></small>
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