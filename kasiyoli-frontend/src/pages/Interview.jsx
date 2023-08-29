import introductionDB from '../introductionDB';
import Introduction from '../components/Introduction';

const Interview = () => {

    const filteredContent = introductionDB.filter(item => item.type == 'interview')    
    // console.log(filteredContent); // Add this line
    const interviewContent = filteredContent.map(item => {
        return (
            <Introduction
            key={item.id}             
            content = {item.content}
            img = {item.img}
            />
        )        
    })

    return (
        <>

            <section>
                {interviewContent}
            </section>

        </>
    )
}

export default Interview