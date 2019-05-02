import React from 'react';
import  './BackButton.scss'

export default function BackButton() {
    return <button onclick="window.history.back();" className="BackButton">Go Back</button>
}
