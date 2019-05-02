import React from 'react';

export default function BackButton() {
    return <a onClick={props.history.goBack} className="BackButton govuk-back-link">Back</a>
}
