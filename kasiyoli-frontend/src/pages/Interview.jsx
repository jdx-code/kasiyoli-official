import interviewDB from '../staticDB/interviewDB';
import MainLayout from '../components/MainLayout';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';

const Interview = () => {

    const { volumeID } = useParams(); 

    const filteredContent = interviewDB.filter(item => item.type == 'interview').filter(item => item.volumeID == volumeID)    
    
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
            <Navbar links="magazineLinks" volumeID={volumeID}/>
            <section>
                {interviewContent}
            </section>

        </>
    )
}

export default Interview