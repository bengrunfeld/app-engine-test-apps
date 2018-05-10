import React from 'react'
import ReactDOM from 'react-dom'

import style from '../css/style.css'

const Component = () => {
  return (
    <h1>Webpack & Ben</h1>
  )
}

ReactDom.render(
  <Component />,
  document.getElementById('react-container')
)