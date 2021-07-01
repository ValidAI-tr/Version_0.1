import Redux from 'redux';
import sampleData from '../../spec/data/exampleVideoData.json';

var videoListReducer = (state = [], action) => {
  console.log(state)
  if (action.type === 'CHANGE_VIDEO_LIST') {
    state = action.payload;
  }
  return state;
};

export default videoListReducer;
