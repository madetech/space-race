import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VenueSearchItem from '../VenueSearchItem'
import './SearchPage.scss'

export default function SearchPage () {

    const [venues, setVenues] = useState([]);
    const [locationModalVisible, setVisibleStatus] = useState(false);

    useEffect(() => {
      if(venues.length > 0) return;

      axios.get('api.json')
        .then(function (response) {
          setVenues(response.data)

        })

    })

    console.log(venues);

  return <div className="govuk-width-container">
            <main className="govuk-main-wrapper">
                <div className="govuk-grid-row">
                    <div className="govuk-grid-column-two-thirds">
                      <strong class="govuk-tag" onClick={() => setVisibleStatus(true)}>Location</strong>&nbsp;&nbsp;
                      <div className="location-modal" style={{display: locationModalVisible ? 'inline-block' : 'none'}}>
                        <a href="#" class="govuk-back-link" onClick={(e) => {e.preventDefault(); setVisibleStatus(false)}}>Close</a>
                        This is the modal
                      </div>
                      <strong class="govuk-tag">Size</strong>&nbsp;&nbsp;
                      <strong class="govuk-tag">Date</strong>
                      <br /><br />
                    </div>

                    <div className="govuk-grid-column-two-thirds venue-search-items">
                      {venues.map(venue => <VenueSearchItem siteName={venue.SITE_NAME} />)}
                    </div>
                  </div>
            </main>
        </div>
}