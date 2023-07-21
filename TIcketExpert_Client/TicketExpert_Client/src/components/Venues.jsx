import { useState, useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'


const Venues = () => {
    const [venues, setVenues] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getVenues = async () => {
            const response = await axios.get('localhost:8000/venues')
            console.log(response)
            // setVenues(res.data)
            // console.log(venues)
            }
            getVenues()
        }, [])
        

    const showVenue = (event) => {
        navigate(event)
    }

    return (
        <div className = "venues">
            <h2>List of Venues</h2>
            {
                venues.map((venue, key) => (
                    <div className="venueCard" key={key} onClick>
                        <h3>{venue.name}</h3>
                        <h3>{venue.photo_url}</h3>
                    </div>

                   
                ))
            }
        </div>
    )
}

export default Venues