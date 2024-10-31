import React from 'react'
import "./Massimo.css"
import backgroundVideo from './videos/your-video-file.mp4'; 
const Massimo = () => {
  return (
    <div className="massimo">
    <video autoPlay loop muted playsInline>
      <source src={backgroundVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="content">
      {/* Any additional content you want over the video */}
    </div>
  </div>
  )
}

export default Massimo