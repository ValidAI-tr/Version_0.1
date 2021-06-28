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
      if (callback) {
        callback(items);
      }
    })

    // .then((result) => {console.log(result);return (result);})

    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

export default searchYouTube;
