import React from 'react'

export const SimpleComp = ({ value }) => {

  const style = {
    backgroundColor: "pink",
    padding: 5
  }
  return (
    <div style={style}>
      <h2>Simple Component</h2>
      <h3> {value} </h3>
    </div>
  )
}
