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
        <img className="featured" src={image} />
    </div>
}
