import React from 'react'

import {
  Layout,
  SEO,
  Grid,
  ColContent,
  ColExtra,
  ColSidebar,
  Title,
  ExternalLink,
  Header
} from '../components'

function IndexPage({ location }) {
  return (
    <Layout>
      <SEO title="Home" />

      {/* HERO */}
      <section id="section-hero">
        <div className="container">
          <Grid>
            <ColSidebar>
              <Header pathname={location.pathname} />
            </ColSidebar>
            <ColContent>deneme</ColContent>

            <ColExtra>
              <ExternalLink
                urls={[
                  { name: 'VSCO', url: 'https://vsco.co/adem/gallery' },
                  { name: 'Instagram', url: 'https://instagram.com/ademilter' }
                ]}
              />
            </ColExtra>
          </Grid>
        </div>
      </section>

      {/* - */}
      <section id="section-last-photo">
        <div className="container">
          <Grid>
            <ColSidebar>
              <Title>Son Fotoğraflar</Title>
            </ColSidebar>

            <ColContent>deneme</ColContent>
          </Grid>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
