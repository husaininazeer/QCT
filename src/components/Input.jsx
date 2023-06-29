import React from 'react'
import styles from './Input.scss'

const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

function Input({ props }) {
  const { name, label, placeholder, refer } = props
  return (
    <div className="InputFields">
      {/* <label>{toTitleCase(label)}</label> */}
      <input ref={refer} {...props}></input>
    </div>
  )
}

export default Input
