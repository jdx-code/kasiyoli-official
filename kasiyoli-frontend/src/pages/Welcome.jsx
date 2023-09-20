import interviewDB from '../staticDB/interviewDB';
import MainLayout from '../components/MainLayout';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Welcome = () => {    

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
            <Navbar links="magazineLinks" volumeID={volumeID} />
            <section>
                {editorialContent}
            </section>

        </>
    )
}

export default Welcome