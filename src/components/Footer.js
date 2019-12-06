import React from 'react'

import ProductHuntIcon from 'react-icons/lib/fa/product-hunt'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import LinkedinIcon from 'react-icons/lib/fa/linkedin'
import Styled  from 'react-emotion'
import Img from 'gatsby-image'

const Makers = Styled('div')`
  display: flex;
  justify-content: space-around
  @media (max-width: 768px) {
    flex-direction: column
  }
`

const Container = Styled('div')`
  max-width: 1200px;
  margin: 0 auto;
`

const Maker = ({ name, img, bio, twitter, linkedin, producthunt }) => (
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
    <h2 style={{ color: 'white', textTransform: 'none', textAlign: 'center' }}>{name}</h2>
    { img !== undefined ? <Img resolutions={img.resolutions} style={{ maxWidth: '100px', borderRadius: '50px', margin: '0 auto' }} /> : '' }
    <p style={{ color: 'white', marginTop: '10px', marginBottom: '10px', textAlign: 'center', lineHeight: '1.5em' }}>{bio}</p>
    <div className='socials' style={{ display: 'flex', paddingTop: "10px" }}>
      {twitter !== undefined ? <a href={twitter} target='_blank'>
        <TwitterIcon id='ph' color='#FFF' size={20} />
      </a> : ''}
      <a href={linkedin} target='_blank'>
        <LinkedinIcon id='ph' color='#FFF' size={20} />
      </a>
      <a href={producthunt} target='_blank'>
        <ProductHuntIcon id='ph' color='#FFF' size={20} />
      </a>
    </div>
  </div>
)

const Footer = props => (
  <footer id='footer'>
    <p className='description' style={{ fontSize: '1em' }}>
      <a target="_blank" rel="noopener noreferrer" href='https://www.iubenda.com/privacy-policy/74461933'>Privacy Policy</a> | <a target="_blank" rel="noopener noreferrer" href='https://ccpachecklist.gdprform.io/en'>Exercise your rights</a>
    </p>

    <div className='gradient'>
      <h5>About CCPA Checklist</h5>
      <div className='subtitle'>CCPA Checklist is made to help businesses navigate the CCPA landscape.
      The project is inspired by <a href='https://gdprchecklist.io/'>The GDPR checklist</a>, created by <a href='https://complianceboard.io'>ComplianceBoard </a></div>

      <Makers>
        <Maker
          key='patrick'
          name='Patrick Dalvinck'
          img={props.patrick}
          bio={[
            'Co-founder ',
            <p><a key='complianceboard' href='https://www.complianceboard.io' target='_blank'>ComplianceBoard</a></p>
          ]}
          linkedin='https://www.linkedin.com/in/patrickdalvinck/'
          twitter='https://twitter.com/pdalvinck'
          producthunt='https://www.producthunt.com/@patrick_dalvinck'
        />
        <Maker
          key='evrard'
          name="Evrard t'Serstvens"
          img={props.evrard}
          bio={[
            'Co-founder ',
            <p><a key='complianceboard' href='https://www.complianceboard.io' target='_blank'>ComplianceBoard</a></p>
          ]}
          linkedin='https://www.linkedin.com/in/evrard-t-serstevens-183248a1/'
          producthunt='https://www.producthunt.com/@evrardts'
        />
        <Maker
          key='johan'
          name='Johan De Keulenaer'
          img={props.johan}
          bio={[
            'Co-founder ',
            <p><a key='pr' href='https://www.privacyradius.com' target='_blank'>Privacy Radius</a></p>
          ]}
          linkedin='https://www.linkedin.com/in/johandekeulenaer'
          twitter='https://twitter.com/ActiveLife '
          producthunt='https://www.producthunt.com/@johandekeulenaer'
        />
      </Makers>
      <a href="javascript:window.Metomic('ConsentManager:show')">manage cookies</a>
    </div>
  </footer>
)

export default Footer
