import React, { useState, useEffect } from 'react'
import axios from 'axios'
import VenueSearchItem from '../VenueSearchItem'
import './SearchPage.scss'
import GridRow from '../GridRow'
import GridColumn from '../GridColumn'
import Modal from '../Modal'
import 'rheostat/initialize'
import Rheostat from 'rheostat'
import SortingIcon from '../../sorting.png'

export default function SearchPage (props) {
    const [venues, setVenues] = useState([])
    const [locationModalVisible, setLocationModalVisible] = useState(false)
    const [capacityModalVisible, setCapacityModalVisible] = useState(false)
    const [dateModalVisible, setDateModalVisible] = useState(false)
    const [capacityRangeSlider, updateCapacityRange] = useState([20, 50])
    const [postcode, setPostcode] = useState(null)

    useEffect(() => {
        if (venues.length > 0) return

        axios.get('api.json')
            .then(function (response) {
                setVenues(response.data)
            })
    })

    const filteredVenues = venues.filter(venue => {
        const [lowerBound, upperBound] = capacityRangeSlider
        return venue.HACK_MEETING_SIZE >= lowerBound && venue.HACK_MEETING_SIZE <= upperBound
    }).filter(venue => {
        if (!postcode) return true
        return venue.POST_CODE.startsWith(postcode)
    })

    return <GridRow>
        <GridColumn className="filter-options">
            <strong className="govuk-tag"
                    onClick={() => setLocationModalVisible(true)}>Location</strong>&nbsp;&nbsp;
            <Modal onClose={(e) => {
                e.preventDefault()
                setLocationModalVisible(false)
            }} visible={locationModalVisible}>
                <div className="govuk-form-group">
                    <label className="govuk-label" htmlFor="event-name">
                        <h2>
                          Postcode
                        </h2>
                    </label>
                    <input
                        className="govuk-input"
                        id="event-name"
                        name="event-name"
                        type="text"
                        onChange={e => setPostcode(e.target.value)}
                    />
                </div>
            </Modal>
            <strong className="govuk-tag"
                    onClick={() => setCapacityModalVisible(true)}>Size</strong>&nbsp;&nbsp;
            <Modal onClose={(e) => {
                e.preventDefault()
                setCapacityModalVisible(false)
            }} visible={capacityModalVisible}>
              <h2>Number of people</h2>
                <Rheostat
                    min={4}
                    max={200}
                    values={capacityRangeSlider}
                    onValuesUpdated={range => updateCapacityRange(range.values)}
                />
                <h3 className="capacity-minimum">{capacityRangeSlider[0]}</h3>
                <h3 className="capacity-maximum">{capacityRangeSlider[1]}</h3>
            </Modal>
            <strong className="govuk-tag" onClick={() => setDateModalVisible(true)}>Date</strong>
            <Modal onClose={(e) => {
                e.preventDefault()
                setDateModalVisible(false)
            }} visible={dateModalVisible}>

            </Modal>
            <br /><br />
            <img className="sort-icon" src={SortingIcon} />
            <p className="sort-text">
              Sort by Most Relevant
            </p>
        </GridColumn>
        <GridColumn className="venue-search-items">
            {filteredVenues.map(venue => <VenueSearchItem
                onClick={id => props.history.push("/venue/"+id)}
                id={venue.HACK_UUID}
                siteName={venue.SITE_NAME}
                sitePrice={venue.HACK_MEETING_SIZE * 2.5}
            />)}
        </GridColumn>
    </GridRow>
}
