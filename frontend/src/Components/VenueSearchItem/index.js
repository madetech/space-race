import React from 'react'
import  './VenueSearchItem.scss'
import image from './venue1.jpeg'

export default function VenueSearchItem (props) {
    return <div className="venue-search-item" onClick={() => props.onClick(props.id)}>
        <div className="venue-image-container">
          <div className="venue-image" style={{ "background-image": "url(/venue_images/" + props.id + "/1.jpg)"}}></div>
        </div>
        <div className="venue-title">
          <h3>
            {props.siteName}
          </h3>
        </div>
        <div className="venue-price">
          <h3>
            £{props.sitePrice}
          </h3>
        </div>
    </div>
}
