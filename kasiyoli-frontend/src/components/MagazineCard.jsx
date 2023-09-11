const MagazineCards = (props) => {    

    return (                                                  
        <>
            <div className="container">                
                <div className="row row-cols-1 row-cols-md-4 g-5 flex justify-center my-24">

                    {props.data.map((item) => {

                        return(
                        <a key={item._id} href='/editorial'>
                            <div className="col">
                                <div className="card w-72 h-100">
                                    <img src={item.coverImage} className="card-img-top w-full h-72"
                                        alt="Skyscrapers" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.volumeYear}</h5>
                                        <p className="card-text">{item.volumeNum}</p>
                                        <p className="card-text">{item.volumeEditor}</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                            </div>
                        </a>
                        )
                    }
                    )}
                    
                </div>

            </div>
        </>      
    )
}

export default MagazineCards