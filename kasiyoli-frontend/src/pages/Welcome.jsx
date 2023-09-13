import welcomeDB from "../staticDB/welcomeDB"
import MainLayout from "../components/MainLayout"

const Welcome = () => {

    const welcomeContentNew = welcomeDB.map(item => {
      return(
        <MainLayout 
          title = {item.title}
          content = {item.content}
        />
      )
    })

    return (
        <>
          <section>
            {welcomeContentNew}
          </section>
            
        </>
    )
}

export default Welcome