import React, { FC } from 'react';
import style from '../../style/ui-components/VideoBackground.module.scss';

type Props = {};

const VideoBackground: FC<Props> = ({ children }) => {
  return (
    <div className={style.videoContainer}>
      <video className={style.video} autoPlay muted loop>
        {children}
        Your browser is not supported!
      </video>
    </div>
  );
};

export default VideoBackground;
