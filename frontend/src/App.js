import React from 'react'
import Footer from './Components/Footer'
import './App.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import BookingForm from './Components/BookingForm';
import SearchPage from './Components/SearchPage'
import BookingConfirmation from './Components/BookingConfirmation'

function App () {
    return <>
        <Router>
            <Route path="/bookingconfirmation" render={() => <BookingConfirmation/>} />
            <Route path="/form" render={() => <BookingForm />} />
            <Route exact path="/" render={() => <SearchPage />} />
        </Router>        
        <Footer />
    </>

}

export default App
