import interviewDB from '../staticDB/interviewDB';
import MainLayout from '../components/MainLayout';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Editorial = () => {

    const links = [
        {
            "linkName" : "সম্পাদনা সমিতি",
            "to" : "/welcome",
        },
        {
            "linkName" : "শুভেচ্ছা বাণী",
            "to" : "/editorial",
        },
        {
            "linkName" : "অন্তৰংগ আলাপ",
            "to" : "/interview",
        },
        {
            "linkName" : "তথ্যকোষ",
            "to" : "/postCardContent",
        },
        {
            "linkName" : "ছবি",
            "to" : "/gallery",
        },
        {
            "linkName" : "আলোক চিত্ৰ",
            "to" : "/art",
        },
    ]

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

export default Editorial