import introductionDB from '../introductionDB';
import MainLayout from '../components/MainLayout';

const Editorial = () => {

    const filteredContent = introductionDB.filter(item => item.type == 'editorial')    
    
    const editorialContent = filteredContent.map(item => {
        return (
            <MainLayout             
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