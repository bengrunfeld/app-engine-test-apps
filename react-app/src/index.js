import React from 'react'
import ReactDOM from 'react-dom'
import Message from './js/Message'

import './css/style.css'

const Component = () => {
  return (
    <div>
      <h1>Express Webpack React Boilerplate by Ben Grunfeld</h1>
      <Message />
      <div className="ben"></div>
    </div>
  )
}

ReactDOM.render(
  <Component />,
  document.getElementById('react-container') // eslint-disable-line no-undef
)

// Needed for Hot Module Replacement
module.hot.accept() // eslint-disable-line no-undef