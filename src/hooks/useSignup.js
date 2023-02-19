import { useState, useEffect } from 'react'
import { firebaseAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {

  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)

    try {
      // signup
      console.log('creating user ...')
      const res = await firebaseAuth.createUserWithEmailAndPassword(email, password)

      if (!res) {
        throw new Error('Could not complete signup')
      }

      // add display name to userd
      await res.user.updateProfile({ displayName })

      //dispatching the login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    }
    catch (err) {
      console.log(err.message)
      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    }
  }

  useEffect(() => {
    return () => {
      setIsCancelled(true)
    }
  }, [])

  return { signup, error, isPending }
}