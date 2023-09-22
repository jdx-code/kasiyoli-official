import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = (props) => {

    console.log(props)

    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-10 g-5 flex justify-center my-2">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">{props.title ? props.title : 'no props received'}</h4>
                                <hr />
                                <p className="card-text">{props.category}</p>
                                <button className="btn btn-indigo btn-rounded btn-md my-4 bg-blue-100 border-gray-500 hover:bg-blue-50 hover:border-gray-600">
                                    <Link to={`/readmore/${props.id}/${props.volume}`}>
                                    <span className="text-xl text-slate-900">আৰু পঢ়ক</span></Link>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PostCard