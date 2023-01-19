import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import { useState } from 'react'


const NavBar = ({ user, handleLogout }) => {

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  
  const testInput = [
    { name: "Belgium", continent: "Europe" },
  { name: "India", continent: "Asia" },
  { name: "Bolivia", continent: "South America" },
  { name: "Ghana", continent: "Africa" },
  { name: "Japan", continent: "Asia" },
  { name: "Canada", continent: "North America" },
  { name: "New Zealand", continent: "Australasia" },
  { name: "Italy", continent: "Europe" },
  { name: "South Africa", continent: "Africa" },
  { name: "China", continent: "Asia" },
  { name: "Paraguay", continent: "South America" },
  { name: "Usa", continent: "North America" },
  { name: "France", continent: "Europe" },
  { name: "Botswana", continent: "Africa" },
  { name: "Spain", continent: "Europe" },
  { name: "Senegal", continent: "Africa" },
  { name: "Brazil", continent: "South America" },
  { name: "Denmark", continent: "Europe" },
  { name: "Mexico", continent: "South America" },
  { name: "Australia", continent: "Australasia" },
  { name: "Tanzania", continent: "Africa" },
  { name: "Bangladesh", continent: "Asia" },
  { name: "Portugal", continent: "Europe" },
]


if (searchInput.length > 0) {
    testInput.filter((country) => {
    return country.name.match(searchInput);
});
}
  return (
    <nav>
      {user ?
        <div className={styles.mainnav}>
          <div className={styles.techcen}><Link to="/">TECH CENTER</Link></div>
          <input type="text"
          onChange={handleChange}
          value={searchInput} 
          />
          
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
