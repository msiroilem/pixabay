import React from 'react'

export default function Image(onClick, image) {
  return (
    <div className="card" onClick={onClick}>
      <div className="img-wrapper">
        <img src={image} alt="image" />
      </div>
    </div>
  )
}
