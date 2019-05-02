import React, { useEffect, useState } from 'react'
import GridColumn from '../GridColumn'
import GridRow from '../GridRow'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import './VenuePage.scss'

export default function VenuePage (props) {
    const [venue, setVenue] = useState(null)
    const [latlong, setLatLong] = useState(null)

    useEffect(() => {
        if (venue) return

        axios.get('/api.json')
            .then(response => {
                let venue = response.data.filter(venue => {
                    return venue.HACK_UUID == props.id
                })[0]
                axios.get(`https://api.postcodes.io/postcodes/${venue.POST_CODE}`)
                    .then(response => {
                        let result = response.data.result
                        let numbers = [result.latitude, result.longitude]
                        setLatLong(numbers)
                    })
                setVenue(venue)
            })
    })

    if (!venue) return <></>
    const position = [51.505, -0.09]

    let isAvailable = function (parameter) {
        return venue[parameter] == 'Y'
    }
    return <>
        <GridRow>
            <GridColumn>
                <Link to={'/'} className="govuk-back-link">Back</Link>
                <h1>{venue.SITE_NAME}</h1>
                <div className="venue-image-container">
                  <div className="venue-image" style={{ "background-image": "url(/venue_images/" + venue.HACK_UUID + "/1.jpg)"}}></div>
                </div>
                <Link to={'/book/' + props.id} className="govuk-button govuk-button--start"
                      role="button" draggable="false">
                    Book now
                </Link>

            </GridColumn>
        </GridRow>
        <div>
            {latlong ? <Map center={latlong} zoom={16} height={120}>
                <Marker anchor={latlong} payload={1} />
            </Map> : <></>}
        </div>
        <GridRow>
            <GridColumn>
                <dl className="govuk-summary-list govuk-summary-list--no-border">
                    <div className="govuk-summary-list__row">
                        <dt className="govuk-summary-list__key">
                            Maximum capacity
                        </dt>
                        <dd className="govuk-summary-list__value">
                            {venue.HACK_MEETING_SIZE}
                        </dd>
                    </div>
                    <div className="govuk-summary-list__row">
                        <dt className="govuk-summary-list__key">
                            WiFi?
                        </dt>
                        <dd className="govuk-summary-list__value">
                            {isAvailable('HACK_WIFI') ? 'Yes' : 'No'}
                        </dd>
                    </div>
                    <div className="govuk-summary-list__row">
                        <dt className="govuk-summary-list__key">
                            Approved premise for Marriages?
                        </dt>
                        <dd className="govuk-summary-list__value">
                            {isAvailable('HACK_MARRIAGE') ? 'Yes' : 'No'}
                        </dd>
                    </div>
                    <div className="govuk-summary-list__row">
                        <dt className="govuk-summary-list__key">
                            Catering?
                        </dt>
                        <dd className="govuk-summary-list__value">
                            {isAvailable('HACK_CATERING') ? 'Yes' : 'No'}
                        </dd>
                    </div>
                    <div className="govuk-summary-list__row">
                        <dt className="govuk-summary-list__key">
                            Alcohol allowed on site?
                        </dt>
                        <dd className="govuk-summary-list__value">
                            {isAvailable('HACK_ALCOHOL') ? 'Yes' : 'No'}
                        </dd>
                    </div>
                    <div className="govuk-summary-list__row">
                        <dt className="govuk-summary-list__key">
                            Late entry allowed?
                        </dt>
                        <dd className="govuk-summary-list__value">
                            {isAvailable('HACK_LATE') ? 'Yes' : 'No'}
                        </dd>
                    </div>
                    <Link to={'/book/' + props.id} className="govuk-button govuk-button--start"
                      role="button" draggable="false">
                      Book now
                    </Link>
                </dl>
            </GridColumn>
        </GridRow>

    </>
}
