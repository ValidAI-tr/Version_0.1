import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


//   //TODO:  Write an asynchronous action to handle a video search!

const handleVideoSearch = (q) => {
  if (!q) {
    q = 'metallica';
  }
  return dispatch => {
    searchYouTube({YOUTUBE_API_KEY, q}, (videos) => {
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    });
  };
};

export default handleVideoSearch;