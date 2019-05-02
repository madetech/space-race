import React from 'react';
import madeTechLogo from '../../made_tech_logo.png'
import fgLogo from '../../fg_logo_white.png'

export default function Footer() {
    return <footer className="govuk-footer " role="contentinfo">
        <div className="govuk-width-container ">
            <div className="govuk-footer__meta">
                <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
                  <img className="mt-logo" src={madeTechLogo} />
                  <img className="fg-logo" src={fgLogo} />
                </div>
            </div>
        </div>
    </footer>
}
