var searchYouTube = ({key, query, max = 5}, callback) => {
  console.log('QUERY:::', query);
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .then(({items}) => {
      if (items) {
        dispatch();
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

const getYouTubeVideos = (query) {
  var options = {
    key: this.props.API_KEY,
    query: query
  };
  searchYouTube(options, (videos) =>
    this.setState({
      videos: videos,
      currentVideo: videos[0]
    })
  );
}

export default getYouTubeVideos;