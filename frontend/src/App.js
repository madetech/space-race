import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.scss'
import VenueSearchItem from './Components/VenueSearchItem'

function App () {
    return <>
        <Header />
        <div className="govuk-width-container">
            <main className="govuk-main-wrapper">
                <div className="govuk-grid-row">
                    <div className="govuk-grid-column-two-thirds">
                        Search Bar
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
