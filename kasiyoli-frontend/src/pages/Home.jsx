import MagazineCards from '../components/MagazineCard'
import SidebarCard from '../components/SidebarCard'
import postLinks from '../postLinks.js'

const Home = () => {

    const postLinkCards = postLinks.map(item => {
        return (
          <SidebarCard 
            title = {item.title}
            content = {item.content}
          />
        )
      })

    return (
        <>

            <MagazineCards />

            <SidebarCard />

            <section>
            {postLinkCards}
            </section>

        </>
    )
}

export default Home