import Sidebar from "../../components/Sidebar"
import Contentarea from "../../components/Contentarea"

const Dashboard = () => {
    return (
        <>
            <div class="row">
                <div class="col-sm-2">
                    <Sidebar />
                </div>
                <div class="col-md-10">
                    <Contentarea />
                </div>
            </div>

        </>
    )
}

export default Dashboard