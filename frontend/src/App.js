import React from 'react'
import Footer from './Components/Footer'
import './App.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import BookingForm from './Components/BookingForm';
import SearchPage from './Components/SearchPage'
import VenuePage from './Components/VenuePage'
import BookingConfirmation from './Components/BookingConfirmation'
import logo from './logo_hi_res_white.png'
import awsLogo from './aws_logo_white.png'

function App () {
    return <>
      <div className="header">
      <a href="/">
         <img className="wf-logo" src={logo}/>
      </a>
      <a href="https://aws.amazon.com/">
        <img className="aws-logo" src={awsLogo} />
      </a>

      </div>
      <Router>
          <Route path="/book/:id" render={({match, history}) => <BookingForm history={history} id={match.params.id} />} />
          <Route exact path="/booking-confirmation/" render={() => <BookingConfirmation/>} />
          <Route exact path="/" render={({history}) => <SearchPage history={history}/>} />
          <Route path="/venue/:id" render={({match}) => <VenuePage id={match.params.id} />} />
      </Router>
      <Footer />
    </>

}

export default App
