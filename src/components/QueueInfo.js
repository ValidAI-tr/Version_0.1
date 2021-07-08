import React from 'react';
import PropTypes from 'prop-types';
import VideoListEntry from './VideoListEntry.js';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 2px solid red;
`;

var QueueInfo = (props) => (
  <div className="queue-info">
    <Wrapper>
    {
      props.videos.map(video => (
        <VideoListEntry
          key={video.etag}
          video={video}
          handleVideoListEntryTitleClick={props.handleVideoListEntryTitleClick}
        />
      ))
    }
    </Wrapper>
  </div>
);

QueueInfo.propTypes = {
  videos: PropTypes.array.isRequired
};

export default QueueInfo;
