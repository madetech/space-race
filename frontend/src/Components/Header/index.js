import React from 'react'
import logo from './logo.png'

export default function Header () {
    return <header className="govuk-header " role="banner" data-module="header">
        <div className="govuk-header__container govuk-width-container">

            <div className="govuk-header__logo">
                <a href="#" className="govuk-header__link govuk-header__link--homepage">
        <span className="govuk-header__logotype">

            <img src={logo} className="govuk-header__logotype-crown" />

        </span>
                </a>
            </div>
        </div>
    </header>
}
