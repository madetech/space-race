import React, { useState, useEffect } from 'react'
import axios from 'axios'
import VenueSearchItem from '../VenueSearchItem'
import './SearchPage.scss'
import GridRow from '../GridRow'
import GridColumn from '../GridColumn'
import Modal from '../Modal'

export default function SearchPage () {

    const [venues, setVenues] = useState([]);
    const [locationModalVisible, setLocationModalVisible] = useState(false);
    const [capacityModalVisible, setCapacityModalVisible] = useState(false);
    const [dateModalVisible, setDateModalVisible] = useState(false);

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
          <strong class="govuk-tag" onClick={() => setLocationModalVisible(true)}>Location</strong>&nbsp;&nbsp;
            <Modal onClose={(e) => {e.preventDefault(); setLocationModalVisible(false)}} visible={locationModalVisible}>
              Location modal
            </Modal>
          <strong class="govuk-tag" onClick={() => setCapacityModalVisible(true)}>Size</strong>&nbsp;&nbsp;
            <Modal onClose={(e) => {e.preventDefault(); setCapacityModalVisible(false)}} visible={capacityModalVisible}>
              Capacity modal
            </Modal>
          <strong class="govuk-tag" onClick={() => setDateModalVisible(true)}>Date</strong>
            <Modal onClose={(e) => {e.preventDefault(); setDateModalVisible(false)}} visible={dateModalVisible}>
              Date modal
            </Modal>
          <br /><br />
      </GridColumn>
      <GridColumn className="venue-search-items">
        {venues.map(venue => <VenueSearchItem siteName={venue.SITE_NAME} />)}
      </GridColumn>
    </GridRow>
}
