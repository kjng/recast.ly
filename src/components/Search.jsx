// var Search = () => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div>
// );

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: '',
      searchTemplate: {
        max: 5,
        key: YOUTUBE_API_KEY,
      }
    };
  }

  updateCurrentText(e) {
    this.setState({
      currentText: e.target.value
    });
  }

  onInputChange(e) {
    this.updateCurrentText(e);
    this.props.searchYouTube(
      Object.assign({}, this.state.searchTemplate, {query: this.state.currentText})
      , this.props.updateVideos);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.onInputChange.bind(this)} />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

// var searchObject = {
//   max: 5,
//   key: YOUTUBE_API_KEY,
//   query: 'react'
// };