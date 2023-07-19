import { Routes, Route } from 'react-router-dom'

export default function Main () {
    
    return (
        <Routes>
            <Route path='/' element={<VenueList />}/>
           <p> hello</p>
        </Routes>
    )
}