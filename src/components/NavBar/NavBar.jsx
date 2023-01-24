import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {


  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      {user ?
        <div class="container-fluid">
          <Link to="/" className={styles.techcen}>TECH CENTER</Link>
          
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent" className={styles.rightnav}>
          <div className={styles.search}>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          </div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              <li class="nav-item">
              </li>
              <li class="nav-item dropdown" className={styles.accountdrop}>
                <Link to="" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Account</Link>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">

              </li>
            </ul>
          <Link to="/cart" className={styles.cart}>Cart</Link>
          </div>
        </div>


        :
        <ul className={styles.loginandsignup}>
          <li className={styles.login}><Link to="/login">Log In</Link></li>
          <li className={styles.signup}><Link to="/signup">Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
