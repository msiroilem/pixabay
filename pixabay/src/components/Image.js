import React from 'react'

export default function Image(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image_background} alt="image" />
      </div>
    </div>
  )
}
