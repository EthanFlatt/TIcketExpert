import { Link } from 'react-router-dom'
import { useContext } from 'react'


export default function Header () {

  return (

  <div className="navBar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/VenueList">Venues</Link></li>
      <li><Link to="/EventList">Events</Link></li>
    </ul>
  </div>
  )
}
