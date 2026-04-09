
import { createContext, useState } from "react";

export let UserContext=createContext()






export default function UserContextProvider(props)
{

const [userToken, setUserToken] = useState(null)
const [userProfile, setUserProfile] = useState(null)
    return <UserContext.Provider value={{userToken,setUserToken,setUserProfile,userProfile}}>
        {props.children}
    </UserContext.Provider>
}