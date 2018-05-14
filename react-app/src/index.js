import React from 'react'
import ReactDOM from 'react-dom'

import style from './css/style.css'

const Component = () => {
  console.log('Yay!!!!')
  return (
    <div>
      <h1>Webpack & React!!</h1>
      <div className='bed'></div>
    </div>
  )
}

ReactDOM.render(
  <Component />,
  document.getElementById('react-container')
)