import introductionDB from '../introductionDB';
import MainLayout from '../components/MainLayout';

const Interview = () => {

    const filteredContent = introductionDB.filter(item => item.type == 'interview')    
    
    const interviewContent = filteredContent.map(item => {
        return (
            <MainLayout
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