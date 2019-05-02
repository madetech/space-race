import React from 'react'
import Footer from './Components/Footer'
import './App.scss'
import VenueSearchItem from './Components/VenueSearchItem'
import BookingForm from './Components/BookingForm'

function App () {
    return <>
        <div className="govuk-width-container">
            <main className="govuk-main-wrapper">
                <div className="govuk-grid-row">
                    <div className="govuk-grid-column-two-thirds">
                        <a href="#">Location</a><a href="#">Size</a><a href="#"></a>
                    </div>
                    <div className="govuk-grid-column-two-thirds venue-search-items">
                        <VenueSearchItem />
                        <VenueSearchItem />
                        <VenueSearchItem />
                    </div>
                </div>
            </main>
        </div>
        <Footer />
    </>

}

export default App
