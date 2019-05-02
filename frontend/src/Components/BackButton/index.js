import React from 'react';

export default function BackButton() {
    return <button onclick="window.history.back();" className="BackButton govuk-back-link">Go Back</button>
}
