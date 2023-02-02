import { useState } from "react"
import { firebaseAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

const useLogout = ()=>{

    const {dispatch} = useAuthContext()
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const logout = async()=>{
        setError(null)
        setIsPending(true)
        try {
            await firebaseAuth.signOut()
            //dispatch logout
            dispatch({type:'LOGOUT'})
            
        } catch (err) {
            setIsPending(false)
            console.log(err.message)
            setError(err.message)
        }
    }

    return{error , isPending, logout}

}