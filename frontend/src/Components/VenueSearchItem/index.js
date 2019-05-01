import React from 'react'
import  './VenueSearchItem.scss'
import image from './venue1.jpeg'

export default function VenueSearchItem (props) {
    return <div className="venue-search-item">
        {props.siteName}
        <img className="featured" src={image} />
    </div>
}
