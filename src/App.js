import React, {Component} from "react";
import SearchBar from "./Components/SearchBar/search-bar";
import youtube from "./APIs/youtube";
import VideoList from "./Components/VideoList/video-list";
import VideoDetail from "./Components/VideoDetail/video-detail";
import './App.scss';

class App extends Component{
    state = {
        videos: [],
        selectedVideo: null
    };

    onTermSubmit = async (term) => {
        await youtube.get('/search', {
            params: {
                q: term
            }
        }).then(response => this.setState({
            videos: response.data.items,
            selectedVideo: null
        }))
    }

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
        console.log(video.snippet.title)
    }
  render() {
      return (
          <div className="container">
              <SearchBar onFormSubmit={this.onTermSubmit}/>
              {
                  this.state.selectedVideo === null ? null : <VideoDetail video={this.state.selectedVideo} />
              }
              <VideoList videos={this.state.videos} selectVideo={this.onVideoSelect}/>
          </div>
      );
  }
}

export default App;
