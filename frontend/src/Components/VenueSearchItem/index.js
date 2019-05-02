import React from 'react'
import  './VenueSearchItem.scss'
import image from './venue1.jpeg'

export default function VenueSearchItem (props) {
    return <div className="venue-search-item" onClick={() => props.onClick(props.id)}>
        <div className="venue-title">
          <h3>
            {props.siteName}
          </h3>
        </div>
        <div classNAme="venue-image">
          <img className="featured" src={"/venue_images/" + props.id + "/1.jpg"} />
        </div>
    </div>
}
