import React from 'react'
import Footer from './Components/Footer'
import './App.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import BookingForm from './Components/BookingForm';
import SearchPage from './Components/SearchPage'
import logo from './logo.png'

function App () {
    return <>
      <div>
        <img src={logo} />
      </div>
      <Router>
          <Route path="/form" render={() => <BookingForm />} />
          <Route exact path="/" render={() => <SearchPage />} />
      </Router>
      <Footer />
    </>

}

export default App
