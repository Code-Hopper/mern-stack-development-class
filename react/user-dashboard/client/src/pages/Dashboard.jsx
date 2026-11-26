import { Navigate } from "react-router-dom"
import { useUser } from '../context/UserContext'

const Dashboard = () => {

    let { user } = useUser()

    if (!user.isLogin) return <Navigate to="/" replace />

    return (
        <div>
            <h1>this is some Dashboard</h1>
        </div>
    )
}

export default Dashboard