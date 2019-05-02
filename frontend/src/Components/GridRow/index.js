import React from 'react'

export default function GridRow(props) {
    return <div className="govuk-width-container">
        <main className="govuk-main-wrapper">
            <div className="govuk-grid-row">
                {props.children}
            </div>
        </main>
    </div>
}
