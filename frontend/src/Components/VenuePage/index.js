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

    return <>
        <GridRow>
            <GridColumn>
                <Link to={'/'} className="govuk-back-link">Back</Link>
                <h1>{venue.SITE_NAME}</h1>
                <Link to={'/book/' + props.id} className="govuk-button govuk-button--start"
                      role="button" draggable="false">
                    Book now
                </Link>

            </GridColumn>
        </GridRow>
        <div>
            {latlong ? <Map center={latlong} zoom={16} height={400}>
                <Marker anchor={latlong} payload={1} />
            </Map> : <></>}
        </div>
        <GridRow>
            <GridColumn>
                more
            </GridColumn>
        </GridRow>

    </>
}
