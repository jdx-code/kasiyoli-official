import postCardDB from "../postCardDB"
import MainLayout from "../components/MainLayout"

const PostCardContent = () => {

    const postCardDetails = postCardDB.map(item => {
        return (
            <MainLayout                                 
                content = {item.content}
            />
        )
    })

 return (
    <>
        <section>
            {postCardDetails}
        </section>
    </>
 )
}

export default PostCardContent