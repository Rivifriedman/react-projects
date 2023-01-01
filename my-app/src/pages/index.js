import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn <br /> Earth Science Here</h1>
        <p>Prepare for the NYS regents exams</p>
        <Link to="/page-2/">see the full curriculum</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
