import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Categories } from "./Categories";
import { SignUp } from './components/auth/SignUp';
import { TeachOnYudemy } from "./TeachOnYudemy";
import { YudemyForBusiness } from "./YudemyForBusiness";
import { NoMatch } from "./NoMatch";
import { LogIn } from './components/auth/LogIn';
import { Layout } from "./components/Layout";
import NavigationBar from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { SearchBar } from './SearchBar';
import { VideoDetail } from '../components/VideoDetail';
import { VideoList } from '../components/VideoList';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';


const App = () => {

  const [ videos, setVideos ] = useState([]);
  const  [ selectedVideo, setSelectedVideo ] = useState(null);

//  const handleSubmit = async (searchTerm) => {
  //  const response = await youtube.get('search', { params: { q: searchTerm } });

  //  setVideos(response.data.items)
   // setSelectedVideo(response.data.items[0])

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>

    <React.Fragment>
    <NavigationBar/>
    <Jumbotron/>
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/business" component={YudemyForBusiness} />
          <Route path="/teach" component={TeachOnYudemy} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </Layout>
    </React.Fragment>
        </Grid>
      </Grid>
    </Grid>  
  );

  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: 'AIzaSyBMvI_r-SvyENT5z7P8riBjcwlEe9Jote8',
        q: searchTerm,
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}

export default App;
