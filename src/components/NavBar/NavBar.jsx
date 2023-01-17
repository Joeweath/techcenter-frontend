import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'


const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <div className={styles.mainnav}>
          <div className={styles.techcen}><Link to="/">TECH CENTER</Link></div>
          <div className={styles.account}><Link to="/account">Account</Link></div>
          <div className={styles.cart}><Link to="/cart">Cart</Link></div>
        </div>

        
      :
        <ul>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
