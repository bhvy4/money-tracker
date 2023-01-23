import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}><Link to='/'>Money Tracker</Link> </li>
                <li><Link to='/login'>login</Link> </li>
                <li><Link to='/signup'>signup</Link></li> 
            </ul>
        </nav>
    )
}