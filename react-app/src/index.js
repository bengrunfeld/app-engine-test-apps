import React from 'react'
import ReactDOM from 'react-dom'
import Message from './js/Message'

import './css/style.css'

const Container = () => {
  return (
    <div>
      <h1>Express Webpack React Boilerplate by Ben Grunfeld</h1>
      <Message />
      <div className="ben"></div>
      <p className='message'>Say hi at <a href='https://github.com/bengrunfeld'>Github</a> or <a href='https://twitter.com/bengrunfeld'>Twitter</a>!</p>
    </div>
  )
}

ReactDOM.render(
  <Container />,
  document.getElementById('react-container') // eslint-disable-line no-undef
)

// Needed for Hot Module Replacement
module.hot.accept() // eslint-disable-line no-undef