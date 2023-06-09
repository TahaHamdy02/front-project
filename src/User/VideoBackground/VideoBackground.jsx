import React from 'react'
import { vidBackground } from '../../constants'
import "../UserHandle/user.css"
const VideoBackground = () => {
  return (
    <div className="app__register-background">
        <video
          src={vidBackground}
          type="Video/mp4"
            autoPlay
          loop
          controls={false}
          muted
          className="app__register-background_video"
        />
        <div className="app__video-overlay" />
      </div>
  )
}

export default VideoBackground
