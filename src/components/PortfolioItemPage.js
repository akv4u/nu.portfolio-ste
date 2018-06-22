import React from 'react'

const PortfolioItemPage = (props) => (
  <div>
    Showing portfolio of {props.match.params.id}
  </div>
)

export default PortfolioItemPage