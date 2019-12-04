import React from 'react'
import { Persist } from "react-persist"
import Link from 'gatsby-link'
import Sidebar from '../components/Sidebar'
import Newsletter from '../components/Newsletter'
import { steps, roles, differences } from '../data.js'
import meta from '../shared/meta.js'
import Arrow from '../images/arrow-bottom.svg'
import Footer from '../components/Footer'
import Disclaimer from '../components/Disclaimer'
import Scrollspy from 'react-scrollspy'
import Collapsible from 'react-collapsible'

class Li extends React.Component {
  constructor() {
    super()
    this.state = {
      isChecked: false,
      isExpanded: false,
    }
  }

  handleExpand = () => {
    this.setState(prevState => ({
      ...prevState,
      isExpanded: !prevState.isExpanded
    }))
  }

  handleToggle = () => {
    this.setState(prevState => ({
      ...prevState,
      isChecked: !prevState.isChecked
    }))
  }

  

  render () {
      const text = this.props.description
      return (
      <li className={`seed ${this.state.isExpanded ? 'expand' : ''}`}>
        <div className="header">
          <div className={`check ${this.state.isChecked ? 'checked' : ''}`} onClick={this.handleToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
              <g fill="none" fillRule="evenodd" strokeWidth="3" transform="translate(2 2)">
                <path stroke="#057ee6" d="M6 11.402l2.874 2.934L16.06 7"></path>
                <circle cx="11" cy="11" r="11"></circle>
              </g>
            </svg>
          </div>
          <div className={`expand-bar ${this.state.isChecked ? 'checked' : ''}`} onClick={this.handleExpand}>
            <p>{this.props.title}</p>
            <ul className='roles'>
              {this.props.role.map(function(role, index){
                return <li className={`${role}`} key={ index }>{roles[role]}</li>;
              })}
            </ul>


          </div>
          <div className="btn">
            <img src={Arrow} alt="" className="arrow" onClick={this.handleExpand} />
          </div>
        </div>
        <div className='body' style={{ display: this.state.isExpanded ? 'block' : 'none' }} >
          {text.length > 0 &&
          <p>{this.props.description}<br/><br/>Reference:</p>
          }
          {text.length === 0 &&
          <p>Reference:</p>
          }
          
          <ul>
            {this.props.links.map((l, index) => <li key={index}><a href={l.href} target="_blank">{l.title}</a></li>)}
          </ul>
        </div>
        <Persist
          name={this.props.section + ":item-" + this.props.id}
          data={this.state}
          onMount={data => this.setState(data)}
        />
      </li>
    ) 
  }
}

class Section extends React.Component {

  render () {
    return (

        <div>
        {

        this.props.list.map(function(item, index){

            var filtered_list = [];
            item.items.map( function(l, index)
                          {
                            if( ( this.props.companySelected  && l.role.includes('company')  ) ||
                                    ( this.props.consumerSelected  && l.role.includes('consumer')  )  )

                            {
                                filtered_list.push( l );
                            }

                          }.bind(this)
              )

             if( filtered_list.length == 0)
             {
                return ;
             }
             return   <div className="scrollspy" id={[item.id]} key={index}>
                    <h3>{item.title}</h3>
                    <ul className="checklist">
                      { filtered_list.map( function(l, index)
                          {
                            if( ( this.props.companySelected  && l.role.includes('company')  ) ||
                                    ( this.props.consumerSelected  && l.role.includes('consumer')  ) )

                            {
                                return <Li {...l} key={index} top={index * 70} section={item.id} />
                            }

                          }.bind(this)
                      )}
                    </ul>
                  </div>

          }.bind(this) )}

        </div>
    )
  }

}

class IndexPage extends React.Component {

  constructor() {
    super()
    this.state = {
      companySelected: true,
      consumerSelected: true
    }
  }
  toggleCompany = () => {
     this.setState({ companySelected : !this.state.companySelected } );
  }

  toggleConsumer = () => {
     this.setState({ consumerSelected : !this.state.consumerSelected } );
  }

  render () {

    return (
      <div>
        <div className='wrapper'>
          <div className='columns'>
            <Sidebar />
            <div className="col-9">
              <h1>The CCPA Compliance Checklist</h1>
              <h2 className="description first">Achieving CCPA Compliance shouldn't feel like a struggle. This is a basic checklist you can use to harden your CCPA compliancy.</h2>

              {/* <div style={{ marginTop: '50px', textAlign: 'center', border: '1px solid #EEE', padding: '10px', marginBottom: '20px' }}>
                <a href="https://app.gdprform.io/register?coupon=earlybird&utm_source=gdprchecklist.op&utm_medium=banner&utm_campaign=gdpr_checklist_early_bird" style={{ color: '#777', textDecoration: 'none', fontSize: '14px', lineHeight: '28px' }}>
                  <span style={{ background: '#41b541', borderRadius: '2px', marginTop: '20px', color: 'white', padding: '4px 6px' }}>New</span> Manage your data subjects requests with GDPR Form. Start your free trial today and receive a 20% discount. (From the makers of GDPR Tracker & Checklist)
                </a>
              </div> */}
              
              <div className="filter-bar">
              <Collapsible triggerStyle={{ background: '#B71234', borderRadius: '4px', color: 'white', padding: '8px 12px', fontWeight: 'bold', fontSize: '20px'}} trigger="What is the CCPA?">
                  <div className="filter-bar">
                  <p className="small description">
                  "The California Consumer Privacy Act (CCPA) is a California state law that enhances privacy rights and consumer protections for California residents. It regulates what businesses are allowed to do with the personal information they collect from California residents.  
                  </p>
                  <p className="small description">
                  The CCPA aims to put data rights back into the hands of consumers.  Consumer will now be able to understand how their data is actually being used.  They will now have a saying in how and with which third parties their data can be shared.  The CCPA is aimed at enforcing protection and privacy of personal and customer data.
                  </p>
                  </div>
              </Collapsible>
              </div>

              <div className="filter-bar">
              <Collapsible triggerStyle={{ background: '#B71234', borderRadius: '4px', color: 'white', padding: '8px 12px', fontWeight: 'bold', fontSize: '20px'}} trigger="When does CCPA become active?">
                  <div className="filter-bar">
                  <p className="small description">
                  The California Consumer Privacy Act officially goes into effect on Jan. 1, 2020. 
                  </p>
                  <p className="small description">
                  With its strict guidelines and penalties, the CCPA is considered revolutionary legislation on data protection in the US.  As with the European Union’s General Data Protection Regulations (GDPR) and the launch date approaching fast, we believe that for most companies, achieving compliance is probably going to take longer than expected.
                  </p>
                  </div>
              </Collapsible>
              </div>

              <div className="filter-bar">
              <Collapsible triggerStyle={{ background: '#B71234', borderRadius: '4px', color: 'white', padding: '8px 12px', fontWeight: 'bold', fontSize: '20px'}} trigger="Who does the CCPA protect?">
                  <div className="filter-bar">
                  <p className="small description">
                  The CCPA is designed to protect any individual who is a California resident, a household or a device that can be reasonably identified, by any unique identifier.
                  </p>
                  <p className="small description">
                  It's designed to protect California consumers’ data, and to enforce all organisations that deal with California resident data to take their responsibility to safeguard consumer data seriously.
                  </p>
                  </div>
              </Collapsible>
              </div>

              <div className="filter-bar">
              <Collapsible triggerStyle={{ background: '#B71234', borderRadius: '4px', color: 'white', padding: '8px 12px', fontWeight: 'bold', fontSize: '20px'}} trigger="Who does the CCPA apply to?">
                  <div className="filter-bar">
                  <p className="small description">
                  Just like with the GDPR, one should not underestimate the global impact of the CCPA. Any organisation globally that collects personal data of California residents and households should validate whether they are required to comply with the CCPA. 
                  </p>
                  <p className="small description">
                  Any organisation that meets one of the following three criteria annually:
                  </p>
                  <li className="small description">
                  Earn revenues greater than $25 million.
                  </li>
                  <li className="small description">
                  Buy, receive, sell or share the personal information of 50,000 or more consumers, households or devices for commercial purposes.
                  </li>
                  <li className="small description">
                  Derive 50 percent of annual revenues from selling consumers’ personal information.
                  </li>
                  </div>
              </Collapsible>
              </div>
              
              <div className="filter-bar">
              <Collapsible triggerStyle={{ background: '#B71234', borderRadius: '4px', color: 'white', padding: '8px 12px', fontWeight: 'bold', fontSize: '20px'}} trigger="What are the key differences between the CCPA and the GDPR?">
                  <div className="filter-bar">
                  <p className="small description">
                  Any business that has already complied with the GDPR standards should be able to extend its policies and practices fairly easily to fit the CCPA’s requirements.  At the same time, one should not underestimate the important differences between both legislations. 
                  </p>
                  <p className="small description">
                  The European legislation could be considered more rigorous overall, even though the CCPA takes a broader view of personal information than the GDPR.  For offenders, there is also a significant difference in the fines structure.
                  </p>
                  <h3>Here are the most important differences between the CCPA and GDPR:</h3>
                  <li className="small description">
                  The GDPR set a penalty limit of 4% of global annual revenues, while the CCPA does not have a ceiling on regulator penalties.
                  </li>
                  <li className="small description">
                  Any intentional violation of the CCPA will result in a civil penalty of $ 7,500 per incident.
                  </li>
                  <li className="small description">
                  The CCPA has pre-defined minimum ($100) and maximum ($750) damage amounts per consumer per incident for private actions against violators, while the GDPR prescribes neither floor nor ceiling values.
                  </li>
                  <li className="small description">
                  The CCPA applies to businesses only, while the GDPR covers any entity that processes  personal data of EU residents.
                  </li>
                  <li className="small description">
                  The CCPA has a broader definition of personal information than GDPR.
                  </li>
                  <li className="small description">
                  Both legislations have different conditions for access and deletion requests of personal data.
                  </li>
                  <li className="small description">
                  The CCPA does not expressly include the right to correct errors in processed personal data.
                  </li>
                  <li className="small description">
                  The GDPR allows covered entities to establish equivalent mechanisms, while the CCPA prescribes disclosures, communication channels, and other measures.
                  </li>
                  <li className="small description">
                  The CCPA does not expressly include the right to stop automated decision making (i.e., the right to require a human to make decisions that have legal implications/effect).
                  </li>
                  </div>
              </Collapsible>
              </div>

              <div className="filter-bar">
                <h3>Select who you are:</h3>
                <ul className="selected-three">
                  <li onClick={this.toggleCompany} className={this.state.companySelected ? 'company' : ''}><h2>Company: I process personal data</h2></li>
                  <li onClick={this.toggleConsumer} className={this.state.consumerSelected ? 'consumer' : ''}><h2>Consumer: My personal data is being collected</h2></li>
                </ul>
              </div>

              <div className="filter-bar">
                <p className="small description">
                The list below is far from a legal exhaustive document, it merely tries to help you overcome the struggle.
                <br/><br/>Feel free to <a href="https://github.com/privacyradius/ccpa-checklist" target="_blank">contribute directly</a> on GitHub!
                </p>
              </div>

                { steps.map( (function(s)
                    {
                    return <Section key={s.id} list={[s]} companySelected={this.state.companySelected} consumerSelected={this.state.consumerSelected} />
                    }).bind(this)
                    ) }
              <Newsletter />
              <Footer />
              <Disclaimer />
            </div>
          </div>
        </div>
        <Persist
          name={"index-page"}
          data={this.state}
          onMount={data => this.setState(data)}
        />
      </div>
  )}
}

export default IndexPage
