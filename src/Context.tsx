import { createContext, ReactNode, useState } from "react";

export interface userContextType {
    username: string;
    setUsername: (username: string) => void;
    // userInfo: Object
    // setUserInfo: (userInfo: Object) => void;
}

// If we are dealing with username and setUsername only, we can also use string in place of null and ""
export const UserContext = createContext<userContextType>({
    username: "",
    setUsername: () => {}
})

const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [username, setUsername] = useState("")
    // const [userInfo, setUserInfo] = useState({})

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    )
}

// Now we can use this context wherever we want to

export default UserContextProvider


