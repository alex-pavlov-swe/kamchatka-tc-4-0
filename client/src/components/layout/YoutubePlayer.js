import React from 'react';
import YouTube from 'react-youtube';

const YoutubePlayer = src => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  return (
    <div className="container">
      <div className="row" id="video">
        <div className="col-sm-12" id="main-video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/szKbLn4ssW4"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YoutubePlayer;
