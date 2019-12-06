import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          {/* Schema.org tags */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: `
                {
                  "@context": "http://schema.org",
                  "@type": "Organization",
                  "name": "CCPA Checklist",
                  "url": "https://www.ccpacompliancechecklist.com",
                  "sameAs": [
                      "https://twitter.com/complianceboard.io"
                  ]
                } 
            `}} />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}

          <script dangerouslySetInnerHTML={{ 
            __html: `
              !(function(p,r,i,v,a,c,y){p['MetomicObject']=a;p[a]=p[a]||function(){
              (p[a].q=p[a].q||[]).push(arguments)},p[a].l=1*new Date();c=r.createElement(i),
              y=r.getElementsByTagName(i)[0];c.async=1;c.src=v+'?d='+r.location.host;y.parentNode.insertBefore(c,y)
              })(window, document, 'script', 'https://consent-manager.metomic.io/embed.js', 'Metomic');
              Metomic('load', { projectId: 'prj:5c06edf5-2432-4bf1-9d9d-38a0e0be11c8' });
            `
            }}
          />
        </body>
      </html>
    )
  }
}
