import welcomeDB from "../staticDB/welcomeDB"
import MainLayout from "../components/MainLayout"
import Navbar from "../components/Navbar"
import { useParams } from 'react-router-dom';

const Editorial = () => {

  const { volumeID } = useParams(); 

    const filteredContent = welcomeDB.filter(item => item.volumeID == volumeID)

    const welcomeContentNew = filteredContent.map(item => {
      return(
        <MainLayout 
          title = {item.title}
          content = {item.content}
        />
      )
    })

    return (
        <>
          <Navbar links="magazineLinks" volumeID={volumeID}/>
          <section>
            {welcomeContentNew}
          </section>
            
        </>
    )
}

export default Editorial