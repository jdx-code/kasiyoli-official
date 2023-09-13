import welcomeDB from "../staticDB/welcomeDB"
import MainLayout from "../components/MainLayout"
import { useParams } from 'react-router-dom';

const Welcome = () => {

  const { volumeID } = useParams();

    const welcomeContentNew = welcomeDB.map(item => {
      return(
        <MainLayout           
          content = {item.content}
          volume = {item.volume}
        />
      )
    })

    return (
        <>
          <p>Volume ID: {volumeID}</p>
          <section>
            {welcomeContentNew}
          </section>
            
        </>
    )
}

export default Welcome