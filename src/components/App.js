import React, { createContext } from 'react';
// import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import SearchContainer from '../containers/SearchContainer.js';
import { connect, useSelector } from 'react-redux';
import store from '../store/store.js';
import handleVideoSearch from '../actions/search.js';

const Context = createContext('test string');



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
    // this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    // this.dispatchHandleVideoSearch = this.dispatchHandleVideoSearch.bind(this);
  }

  componentDidMount() {
    console.log('App Has Loaded...')
  }

  // handleSearchInputChange(e) {
  //   const { searchInput } = this.state;
  //   const { value } = e.target;
  //   this.setState({
  //     searchInput: searchInput + value,
  //   });
  //   this.dispatchHandleVideoSearch(searchInput);
  // }


  render() {
    console.log("mapDispatchToProps::::::", this.props)
    const dispatchHandleVideoSearch = (q) => {
      this.props.handleVideoSearch(q)
    }

    const { searchInput } = this.state;
    const props = {
      handleSearchInputChange: (e) => {
        const { searchInput } = this.state;
        const { value } = e.target;
        this.setState({
          searchInput: searchInput + value,
        });
        // searchInput = "curt"
        dispatchHandleVideoSearch(searchInput);
      },
      searchInput,
    }
    return (
        <div>
          Hello World from ValidAI.tr!
          <SearchContainer props={props} />
          {/* <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={{snippet:{title:'default',description:'default'},id:{videoId:0}}}/>
          </div>
          <div className="col-md-5">
            <VideoList
              handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
              videos={this.state.videos}
            />
          </div>
        </div> */}
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {state};
}

const mapDispatchToProps = (dispatch) => {
  return {
    thang: "thang",
    handleVideoSearch: (query) => dispatch(handleVideoSearch(query))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
