import React from 'react';
import  './BookingForm.scss'
import GridRow from '../GridRow';

export default function BookingForm () {
    return <GridRow>
    <form className="BookingForm govuk-form-group">
      <label class="govuk-label" for="fullname">
      Full Name
      </label>
      <span id="name-hint" class="govuk-hint">
      We’ll only use this to send you a booking confirmation
      </span>
      <input type="text" name="fullname" className="govuk-input" />
      <br />
      <br />
      <label class="govuk-label" for="email">
      Email Address
      </label>
      <span id="email-hint" class="govuk-hint">
      We’ll only use this to send you a booking confirmation email
      </span>
      <input type="email" name="email" className="govuk-input" />
      <br />
      <br />
      <label class="govuk-label" for="phonenumber">
      Phone Number
      </label>
      <span id="phone-hint" class="govuk-hint">
      We need this to confirm your booking with you
      </span>
      <input type="tel" name="phonenumber" className="govuk-input" />
      <br />
      <br />
      <input type="submit" value="Send Request" className="govuk-button" />
    </form>
    </GridRow>
}
