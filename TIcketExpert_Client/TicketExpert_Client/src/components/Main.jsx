import { Routes, Route } from 'react-router-dom'
import Venues from './Venues'
import VenueItem from './VenueItem'
import Events from './Events'
import EventItem from './EventItem'


const Main = () => {
    
    return (
        <Routes>
            <Route path='/venues' element={<Venues />}/>
            <Route path='/venue/:id' element={<VenueItem />}/>
            <Route path='/events' element={<Events />}/>
            <Route path='/events/:id' element={<EventItem />}/>
        </Routes>
    )
}

export default Main