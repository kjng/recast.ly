class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableVideos: [],
      currentVideo: {},
    };
  }

  componentDidMount() {
    this.props.searchYouTube(searchObject, this.updateVideos.bind(this));
  }

  updateVideos(data) {
    this.setState({
      availableVideos: data,
      currentVideo: data[0],
    });
  }

  render() {
    return (
      <div>
        <Nav updateVideos={this.updateVideos.bind(this)} searchYouTube={this.props.searchYouTube} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.availableVideos} onClick={this.onVideoListEntryClick.bind(this)} />
        </div>
      </div>
    );
  }

  onVideoListEntryClick(video) {
    this.setState({
      currentVideo: video
    });
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
