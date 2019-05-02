import React from 'react'
import Footer from './Components/Footer'
import './App.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import BookingForm from './Components/BookingForm';
import SearchPage from './Components/SearchPage'
import VenuePage from './Components/VenuePage'
import logo from './logo.png'

function App () {
    return <>
      <div>
        <img src={logo} />
      </div>
      <Router>
          <Route path="/form" render={() => <BookingForm />} />
          <Route exact path="/" render={({history}) => <SearchPage history={history}/>} />
          <Route path="/venue/:id" render={({match}) => <VenuePage id={match.params.id} />} />
      </Router>
      <Footer />
    </>

}

export default App
