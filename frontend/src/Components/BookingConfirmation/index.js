import React from 'react';
import GridRow from '../GridRow'
import GridColumn from '../GridColumn';

export default function BookingConfirmation () {
  return <GridRow>
    <GridColumn>
    <div class="govuk-panel govuk-panel--confirmation">
  <h1 class="govuk-panel__title">
    Confirmation
  </h1>
  <div class="govuk-panel__body">
    You gave been sent a confirmation email of your booking.
  </div>
</div>
    </GridColumn>
  </GridRow>
  
}