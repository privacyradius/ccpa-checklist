import React from 'react'
import { steps } from '../data.js'
import logo from '../images/ccpa-shield.png'
import { url } from '../shared/meta'
import Scrollspy from 'react-scrollspy'

const Sidebar = props => (
  <div className="fixed">
    <a href="/">
      <img src={logo} alt="CCPA Checklist" className="logo" />
    </a>
    <nav>
    <h4 style={{ marginTop: '20px' }}>Sections</h4>
      <ul>
        <Scrollspy items={['are-you-impacted','types-of-data', 'internal-processes', 'external-communication', 'recommendations', 'exception', 'amendments', 'consumer-rights']} currentClassName="is-current">
          { steps.map(s => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}
        </Scrollspy>
      </ul>
      <h4 style={{ marginTop: '20px' }}>CCPA Regulation</h4>
      <ul>
        <li><a target="_blank" rel="noopener noreferrer" href='https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CIV&division=3.&title=1.81.5.&part=4.&chapter=&article='>Cal. Civil Code</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href='https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201920200AB25'>Assembly Bill n°25</a></li>
      </ul>
      <h4 style={{ marginTop: '20px' }}>Compliance tools</h4>
      <ul>
        <li><a target="_blank" rel="noopener noreferrer" href='https://www.gdprform.io'>GDPR Form</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href='https://gdprtracker.io/'>GDPR Tracker</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href='https://gdprchecklist.io/'>GDPR Checklist</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href='https://databreach.es/'>DATA Breaches</a></li>
      </ul>
      <h4 style={{ marginTop: '20px' }}>Created by</h4>
      <ul>
        <li><a target="_blank" rel="noopener noreferrer" href='https://www.complianceboard.io'>ComplianceBoard</a></li>
      </ul>
    </nav>
    <div className='newsletter-sidebar'>
      <a href="http://eepurl.com/dLEX-2" className="submit-button" style={{ marginTop: '10px' }}>Newsletter</a>
    </div>
  </div>
)

export default Sidebar