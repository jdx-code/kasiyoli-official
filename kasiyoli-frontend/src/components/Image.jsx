import Navbar from './Navbar'

const Image = (props) => {

    let title;
    
    return (
        <>  
          
            <div className="container text-2xl lg:text-3xl font-semibold">    
                
                {props.data.forEach(item => {                    
                        title = item.title                    
                })}

                <h1 className='text-center px-20 leading-8'>{title}</h1>
                <div className="row p-12 mb-6 row-cols-md-5 g-2 flex justify-center my-12">                
                    
                    {props.data.map((item) => {
                        return(
                            
                            <div className="card shadow-2xl w-[90%] sm:w-[44%] md:w-[40%] lg:w-[25%] rounded-md border-[#14a800]">                                                                                            
                                <div className="card items-center">
                                    {item.file ? (
                                        <a href={item.file} data-fancybox="gallery" data-caption="Caption #2">
                                            <img src={item.file} className="h-72" />
                                        </a>
                                    ):(
                                        <a href={item.image} data-fancybox="gallery" data-caption={item.studentName}>
                                            <img src={item.image} className="w-full h-72" />
                                        </a>
                                    )}
                                    {item.description ? (                              
                                        <div className="card-body font-light">
                                            <h5 className="card-title text-lg font-semibold text-center">{item.description}</h5>
                                            <p className="card-text">
                                            </p>
                                        </div>
                                    ): item.studentName ? (
                                        <div className="card-body font-light">
                                            <h5 className="card-title text-lg font-semibold text-center">{item.studentName}</h5>
                                            <p className="card-text">
                                            </p>
                                        </div>
                                    ) : ''}

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