import interviewDB from '../staticDB/interviewDB';
import MainLayout from '../components/MainLayout';
import { useParams } from 'react-router-dom';

const Editorial = () => {

    const { volumeID } = useParams();

    const filteredContent = interviewDB.filter(item => item.type == 'editorial').filter(item => item.volumeID == volumeID)   
    
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
            <p>Volume ID: {volumeID}</p>
            
            <section>
                {editorialContent}
            </section>

        </>
    )
}

export default Editorial