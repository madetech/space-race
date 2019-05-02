import React from 'react'
import Footer from './Components/Footer'
import './App.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import BookingForm from './Components/BookingForm';
import SearchPage from './Components/SearchPage'
import VenuePage from './Components/VenuePage'
import BookingConfirmation from './Components/BookingConfirmation'
import logo from './logo.png'

function App () {
    return <>
      <div>
        <img src={logo} />
      </div>
      <Router>
          <Route path="/form" render={() => <BookingForm />} />
          <Route exact path="/" render={() => <SearchPage />} />
          <Route exact path="/venue/" render={() => <VenuePage />} />
          <Route exact path="/bookingconfirmation/" render={() => <BookingConfirmation/>} />
      </Router>
      <Footer />
    </>

}

export default App
