import Redux from 'redux';
import sampleData from '../../spec/data/exampleVideoData.json';

var videoListReducer = (state = [], action) => {
  if (action.type === 'CHANGE_VIDEO_LIST') {
    state = action.videos;
  }
  return state;
};

export default videoListReducer;
