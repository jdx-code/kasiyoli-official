import Navbar from './Navbar'

const Image = (props) => {

    let title;
    
    return (
        <>  
          
            <div className="container">    
                
                {props.data.forEach(item => {                    
                        title = item.title                    
                })}

                <h1 className='text-center text-4xl'>{title}</h1>
                <div className="row mx-8 row-cols-md-5 g-2 flex justify-center my-12">                
                    
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
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{item.description}</h5>
                                            <p className="card-text">
                                            </p>
                                        </div>
                                    ): item.studentName ? (
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{item.studentName}</h5>
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