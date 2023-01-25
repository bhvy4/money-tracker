import { useState } from 'react'
import styles from './Signup.module.css'
import { useSignup } from '../../hooks/useSignup'

export default function Signup() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup , error, isPending} = useSignup()

  const handleSubmit = (e)=>{
    e.preventDefault()
    signup(email,password,name);
  }

  return (
    < form onSubmit={handleSubmit} className={styles['signup-form']} >
      <h2>Sign up</h2>
      <label>
        <span>Display Name:</span>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {!isPending && <button className='btn'>submit</button>}
      {isPending && <button className='btn' disabled>loading</button> }
      {error && <p>{error}</p>}
    </form >
  )
}