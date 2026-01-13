import { Link } from 'react-router-dom'
import './Menu.css'

function Menu() {
  return (
    <div className="menu">
      <div className="menu-items">
        <Link to="/menu/mancala"><button className="mancala-button">Mancala</button></Link>
      </div>
    </div>
  )
}

export default Menu
