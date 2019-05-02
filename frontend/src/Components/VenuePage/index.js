import React, { useEffect, useState } from 'react'
import GridColumn from '../GridColumn'
import GridRow from '../GridRow'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function VenuePage (props) {
    const [venue, setVenue] = useState(null)

    useEffect(() => {
        if (venue) return

        axios.get('/api.json')
            .then(function (response) {
                setVenue(response.data.filter(venue => {
                    return venue.HACK_UUID == props.id
                })[0])
            })
    })

    if(!venue) return <></>

    return <>
        <GridRow>
            <GridColumn>
                <h1>{venue.SITE_NAME}</h1>
                <Link to={"/book/"+props.id} className="govuk-button govuk-button--start" role="button" draggable="false">
                    Book now
                </Link>
            </GridColumn>
        </GridRow>
    </>
}
