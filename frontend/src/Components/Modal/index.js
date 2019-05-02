import React, { useState, useEffect } from 'react'
import GridRow from '../GridRow'
import GridColumn from '../GridColumn'

export default function Modal (props) {

  return <div className="location-modal" style={{display: props.visible ? 'inline-block' : 'none'}}>
    <GridRow>
      <GridColumn>
        <a href="#" class="govuk-back-link" onClick={props.onClose}>Close</a>
        {props.children}
      </GridColumn>
     </GridRow>
  </div>
}