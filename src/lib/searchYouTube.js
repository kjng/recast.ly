var searchObject = {
  max: 5,
  key: YOUTUBE_API_KEY,
  query: 'react'
}

var searchYouTube = (options, callback) => {

   $.ajax({
    data: {
      part: 'snippet,id',
      type: 'video',
      videEmbeddable: true,
      maxResults: options.max,
      key: options.key,
      q: options.query
    },
    dataType: 'json',
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    success: function(data) {
      // console.log(data.items);
      callback(data.items);
    },
    error: function(error) {
      console.log(error);
    }
  });

};

window.searchYouTube = searchYouTube;
window.searchObject = searchObject;

//options object: expected input to search
  //callback =
