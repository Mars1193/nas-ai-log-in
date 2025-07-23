import React from 'react';
import styles from './VideoPlayer.module.css';

// This component will display your employee video
const VideoPlayer = () => {
  return (
    <div className={styles.videoWrapper}>
      <video 
        className={styles.video}
        src="/videos/employee_video.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
