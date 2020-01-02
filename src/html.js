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
          
          <script src="https://config.metomic.io/config.js?id=prj:5c06edf5-2432-4bf1-9d9d-38a0e0be11c8" crossorigin charset="utf-8"></script>
          <script src="https://consent-manager.metomic.io/embed.js" crossorigin charset="utf-8"></script>

          <script type="text/x-metomic" data-micropolicy="statistics"  async src="https://www.googletagmanager.com/gtag/js?id=UA-117545630-6"></script>
          <script type="text/x-metomic" data-micropolicy="statistics" dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'UA-117545630-6'); 
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

        </body>
      </html>
    )
  }
}
