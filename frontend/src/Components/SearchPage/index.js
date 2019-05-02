import React, { useState, useEffect } from 'react'
import axios from 'axios'
import VenueSearchItem from '../VenueSearchItem'
import './SearchPage.scss'
import GridRow from '../GridRow'
import GridColumn from '../GridColumn'
import Modal from '../Modal'
import 'rheostat/initialize';
import Rheostat from 'rheostat';

export default function SearchPage () {

    const [venues, setVenues] = useState([]);
    const [locationModalVisible, setLocationModalVisible] = useState(false);
    const [capacityModalVisible, setCapacityModalVisible] = useState(false);
    const [dateModalVisible, setDateModalVisible] = useState(false);
    const [capacityRangeSlider, updateCapacityRange] = useState([20, 50]);

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
    })

    console.log(venues)

    return <GridRow>
        <GridColumn>
          <strong className="govuk-tag" onClick={() => setLocationModalVisible(true)}>Location</strong>&nbsp;&nbsp;
            <Modal onClose={(e) => {e.preventDefault(); setLocationModalVisible(false)}} visible={locationModalVisible}>
              Location modal
            </Modal>
          <strong className="govuk-tag" onClick={() => setCapacityModalVisible(true)}>Size</strong>&nbsp;&nbsp;
            <Modal onClose={(e) => {e.preventDefault(); setCapacityModalVisible(false)}} visible={capacityModalVisible}>
              <Rheostat
                min={4}
                max={200}
                values={capacityRangeSlider}
                onValuesUpdated={range => updateCapacityRange(range.values)}
              />
              <h1>{capacityRangeSlider[0]}</h1>
              <h1>{capacityRangeSlider[1]}</h1>
            </Modal>
          <strong className="govuk-tag" onClick={() => setDateModalVisible(true)}>Date</strong>
            <Modal onClose={(e) => {e.preventDefault(); setDateModalVisible(false)}} visible={dateModalVisible}>
              Date modal
            </Modal>
          <br /><br />
      </GridColumn>
      <GridColumn className="venue-search-items">
        {filteredVenues.map(venue => <VenueSearchItem siteName={venue.SITE_NAME} />)}
      </GridColumn>
    </GridRow>
}
