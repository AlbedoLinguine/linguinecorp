import { Link } from 'react-router-dom'
import './Menu.css'

function Menu() {
  return (
    <div className="menu">
        <title>Gallery - Linguine Corp</title>
        <meta name="description" content="Explore our gallery of interactive experiences and games. Discover traditional games and activities from Linguine Corp." />
      <div className="menu-items">
        <Link to="/menu/mancala"><button className="mancala-button">Mancala</button></Link>
      </div>
    </div>
  )
}

export default Menu
