import React, { useState } from "react";
import { SearchBar } from './SearchBar';
import { VideoDetail } from '../components/VideoDetail';
import { VideoList } from '../components/VideoList';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';




//const [ videos, setVideos ] = useState([]);
//const  [ selectedVideo, setSelectedVideo ] = useState(null);
class GridSystem extends React.Component {
 handleSubmit = async (searchTerm) => {
   const response = await youtube.get('search', {
      params: {
        part: "snippet",
        maxResults: 5,
        key: 'AIzaSyBMvI_r-SvyENT5z7P8riBjcwlEe9Jote8',
        q: searchTerm,
      }
    });

// setVideos(response.data.items)
// setSelectedVideo(response.data.items[0])


   // setVideos(videos);
    //setSelectedVideo(videos[0]);
    console.log(response);
  }
render(){
return (
  <Grid style={{ justifyContent: "center" }} container spacing={10}>
    <Grid item xs={11}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <SearchBar onFormSubmit={this.handleSubmit} />
        </Grid>
        <Grid item xs={8}>
          <VideoDetail video={selectedVideo} />
        </Grid>
        <Grid item xs={4}>
          <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
        </Grid>
        </Grid>
      </Grid>
    </Grid> 
  )
}

export default GridSystem;