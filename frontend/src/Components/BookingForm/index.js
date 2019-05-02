import React, { useEffect, useState }  from 'react';
import  './BookingForm.scss'
import GridRow from '../GridRow';
import GridColumn from '../GridColumn';
import axios from 'axios'
import { Link } from 'react-router-dom'
import BackButton from '.,/BackButton'

export default function BookingForm (props) {
    const [venue, setVenue] = useState({})

    useEffect(() => {
        if (venue.HACK_MEETING_SIZE != null) return

        axios.get('/api.json')
            .then(response => {
                let venue = response.data.filter(venue => {
                    return venue.HACK_UUID == props.id
                })[0]
                setVenue(venue)
            })
    })

    return <GridRow>
      <GridColumn>
        <BackButton history={props.history} />
        <form className="BookingForm govuk-form-group" onSubmit={e => {e.preventDefault(); window.location.href = 'https://products.payments.service.gov.uk/pay/fa1108564bd64c979cf706c5b0484aea'}}>
          <label class="govuk-label" for="fullname">
          Full Name
          </label>
          <span id="name-hint" class="govuk-hint">
          We’ll only use this to send you a booking confirmation
          </span>
          <input type="text" name="fullname" className="govuk-input" required/>
          <br />
          <br />
          <label class="govuk-label" for="email">
          Email Address
          </label>
          <span id="email-hint" class="govuk-hint">
          We’ll only use this to send you a booking confirmation email
          </span>
          <input type="email" name="email" className="govuk-input" required/>
          <br />
          <br />
          <label class="govuk-label" for="phonenumber">
          Phone Number
          </label>
          <span id="phone-hint" class="govuk-hint">
          We need this to confirm your booking with you
          </span>
          <input type="tel" name="phonenumber" className="govuk-input" required/>
          <br />
          <br />
          <dl className="govuk-summary-list">
            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">
                Venue
              </dt>
              <dd className="govuk-summary-list__value float-content-right">
                {venue.SITE_NAME}
              </dd>
            </div>
            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">
                Price
              </dt>
              <dd className="govuk-summary-list__value float-content-right">
                £{venue.HACK_MEETING_SIZE * 2.5}
              </dd>
            </div>
          </dl>
          <input type="submit" value="Book" className="govuk-button" />
          <br />
        </form>
      </GridColumn>
    </GridRow>
}
