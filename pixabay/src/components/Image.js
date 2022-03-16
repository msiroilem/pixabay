import React from 'react'

function Image(image_background, onClick) {
  return (
    <div className="card" onClick={onClick}>
      <div className="img-wrapper">
        <img src={image_background} />
      </div>
    </div>
  )
}

export default Image
