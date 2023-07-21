import { useState, useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'


const Events = () => {
    const [event, setEvent] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getEvents = async () => {
            await axios.get('http://localhost:8000/events')
            .then(res => {
                console.log(res.data)
                setEvent(res.data)
            })
        }
        getEvents()
    })

    const showEvent = (event) => {
        navigate(event)
    }

    return (
        <div className = "events">
            <h2>List of Events</h2>
            {
                events.map((event, key) => (
                    <div className="eventCard" key={key} onClick>
                        <h3>{event.name}</h3>
                        <h3>{event.photo_url}</h3>
                    </div>

                   
                ))
            }
        </div>
    )
}

export default Events