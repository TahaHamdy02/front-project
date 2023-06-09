import React from 'react'
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
const Video = ({VidSrc,vidStyle}) => {
  const [playVideo, setplayVideo] = React.useState(false);

  const VidRef = React.useRef();
  const handleVideo = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      VidRef.current.pause();
    } else {
      VidRef.current.play();
    }
  };
  return (
    <>
    <video
      src={VidSrc}
      ref={VidRef}
      type="Video/mp4"
      loop
      controls={false}
      muted
      style={vidStyle}
    />
    <div className="app__video-overlay flex__center">
      <div
        className="app__video-overlay_circle flex__center"
        onClick={handleVideo}
      >
        {playVideo ? (
          <BsPauseFill color="#fff" fontSize={30} />
        ) : (
          <BsFillPlayFill color="#fff" fontSize={30} />
        )}
      </div>
    </div>
    </>
  )
}

export default Video
