import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = (props) => {

    console.log(props)

    return (
        <>
            <div className="container">
                <div className="row g-5 flex justify-center w-full my-2">
                    <div className="col">
                        <div className="card shadow-2xl shadow-white border-2 border-[#14a800]">
                            <div className="card-body">
                                <h4 className="card-title text-3xl">{props.title ? props.title : 'no props received'}</h4>
                                <hr />
                                <p className="card-text text-2xl">{props.category}</p>
                                <button className="btn btn-rounded btn-md my-4 shadow-black border-[#14a800] hover:bg-[#14a800]">
                                    <Link to={`/readmore/${props.id}/${props.volume}`}>
                                    <span className="text-xl hover:text-white">আৰু পঢ়ক</span></Link>
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