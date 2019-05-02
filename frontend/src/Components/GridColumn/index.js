import React from 'react'

export default function GridColumn(props) {
    return <div className={"govuk-grid-column-full "+props.className}>
        {props.children}
    </div>
}
