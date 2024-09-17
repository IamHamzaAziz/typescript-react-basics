import { UserContext } from "./Context";
import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
// import New from "./New";

const User = () => {
    const { username, setUsername } = useContext(UserContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }


    return (
        <div>
            sadsafdsfdsf <br />
            Username: { username } <br />
            <input type="text" onChange={handleChange} /> <br />
            {/* <New /> */}
            {/* New component is working fine here as well  */}
            <Link to={'/new'}>Go to New</Link>
        </div>
    )
}

export default User

