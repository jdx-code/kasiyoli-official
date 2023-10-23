import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = (props) => {

    console.log(props)

    return (
        <>
            <div className="container">
                <div className="row g-6 flex justify-center w-full my-2">
                    <div className="col">
                        <div className="bg-white p-4 shadow-2xl rounded-md shadow-white border-2 border-[#14a800]">
                            <div className="">
                                <div className='flex items-center'>
                                    <i className="p-2 fa fa-tag fa-xl px-2 text-green-600" aria-hidden="true"></i>
                                    <h4 className="font-semibold text-md sm:text-xl py-2">{props.title ? props.title : 'no posts..'}</h4>
                                </div>                                
                                <hr />
                                <p className="text-md sm:text-xl">{props.category}</p>
                                <button className="btn btn-rounded btn-md my-2 shadow-black border-[#14a800] hover:bg-[#14a800] hover:text-white">
                                    <Link to={`/readmore/${props.id}/${props.volume}`}>
                                    <span className="text-md sm:text-xl hover:text-white">পঢ়ক</span></Link>
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