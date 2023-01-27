import React, { useState, useRef, forwardRef } from "react";
const url =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const Player = ({ videoURL = url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  

  const handleProgress = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const progress = (currentTime / duration) * 100;
    setProgress(progress);
  };
  return (
    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <video
        className="rounded-2xl"
        onTimeUpdate={handleProgress}
        ref={videoRef}
        width="490px"
        height="100%"
        controls
      >
        <source src={`${videoURL || url}`} type="video/mp4" />
      </video>
    </div>
  );
};

export default Player;
