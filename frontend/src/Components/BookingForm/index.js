import React from 'react';
import  './BookingForm.scss'
import GridRow from '../GridRow';

export default function BookingForm () {
    return <GridRow>
    <form className="BookingForm">
      <input type="text" name="name" value="" className="BookingFormField" />
      <br />
      <input type="email" name="email" className="BookingFormField" />
      <br />
      <input type="tel" name="phonenumber" className="BookingFormField" />
      <input type="submit" value="Send Request" />
    </form>
    </GridRow>
}
