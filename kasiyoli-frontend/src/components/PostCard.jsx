const PostCard = (props) => {
    
    return (
        <>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-10 g-5 flex justify-center my-2">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">{props.title ? props.title : 'no props received'}</h4>
                                <hr />
                                <p class="card-text">{props.desc}</p>
                                <button class="btn btn-indigo btn-rounded btn-md">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostCard