import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Constants from './Constants';
import Cards from './components/Cards';
import Pagination from './components/Pagination';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
 
  useEffect(() => {
    const fetchData = async () => {
      const queryResult = await axios.post(
          Constants.GRAPHQL_API, {
          query: Constants.GET_CHARACTERS
        }
      );
      const result = queryResult.data.data; 
      if(result.launchesPast !== null){
        if(result.cardsInfo !== null){
          //setData({ cardsInfo: result.launchesPast });
          setPosts(result.launchesPast);
          setLoading(false);
        }
      }
    };
 
    fetchData();
  });

  

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
 
  return (
    
    <Router>
      <h1 style={{margin:'1em'}}>{Constants.TITLE}</h1>
      <Cards posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      {/* <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      </Switch> */}
      
      </Router>
  );
}
 
export default App;
