import { useContext } from 'react'
import { UserContext } from './Context'
import { Link } from 'react-router-dom'

const New = () => {
    const { username } = useContext(UserContext)

    return (
        <div>
            Username: { username } <br />
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default New