import { useState, useEffect } from "react"
import { firebaseAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {

    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)
        try {
            await firebaseAuth.signOut()
            //dispatch logout
            dispatch({ type: 'LOGOUT' })

            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }

        } catch (err) {
            console.log(err.message)
            if (!isCancelled) {
                setIsPending(false)
                setError(err.message)
            }
        }
    }

    useEffect(() => {
        return () => {
            setIsCancelled(true)
        }
    }, [])


    return { error, isPending, logout }

}