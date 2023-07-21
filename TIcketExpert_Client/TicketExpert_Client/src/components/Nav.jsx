import { Link } from 'react-router-dom'
import { useContext } from 'react'


const Nav = () => {

  return (
    <div className="navBar">
        <Link to="/venues">Venues</Link>
        <Link to="/events">Events</Link>
    </div>
  )
}

export default Nav
