import introductionDB from '../introductionDB';
import Introduction from '../components/Introduction';

const Editorial = () => {

    const filteredContent = introductionDB.filter(item => item.type == 'editorial')    
    // console.log(filteredContent); // Add this line
    const editorialContent = filteredContent.map(item => {
        return (
            <Introduction             
            content = {item.content}
            img = {item.img}
            />
        )        
    })

    return (
        <>

            <section>
                {editorialContent}
            </section>

        </>
    )
}

export default Editorial