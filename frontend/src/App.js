import React from 'react'
import Footer from './Components/Footer'
import SearchPage from './Components/SearchPage'
import './App.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import BookingForm from './Components/BookingForm';

function App () {

    return <>
        <Router>
            <Route path="/form" render={() => <BookingForm />} />
            <Route exact path="/" render={() => <SearchPage />} />
        </Router>        
        <Footer />
    </>
}

export default App
