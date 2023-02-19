import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

export default function Navbar() {

    const {logout} = useLogout()
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}><Link to='/'>Money Tracker</Link> </li>
                <li><Link to='/login'>Login</Link> </li>
                <li><Link to='/signup'>Signup</Link></li> 
                <button className='btn'onClick={logout}> Logout</button>
            </ul>
        </nav>
    )
}