import React, { useState, useEffect } from 'react'
import axios from 'axios'
import VenueSearchItem from '../VenueSearchItem'
import GridRow from '../GridRow'
import GridColumn from '../GridColumn'

export default function SearchPage () {
    const [venues, setVenues] = useState([])
    useEffect(() => {
        if (venues.length > 0) return

        axios.get('api.json')
            .then(function (response) {
                setVenues(response.data)

            })

    })

    console.log(venues)

    return <GridRow>
        <GridColumn>
            <strong class="govuk-tag">Location</strong>&nbsp;&nbsp;
            <strong class="govuk-tag">Size</strong>&nbsp;&nbsp;
            <strong class="govuk-tag">Date</strong>
            <br /><br />
        </GridColumn>

        <GridColumn className="venue-search-items">
            {venues.map(venue => <VenueSearchItem siteName={venue.SITE_NAME} />)}
        </GridColumn>
    </GridRow>
}
