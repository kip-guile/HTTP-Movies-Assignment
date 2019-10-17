import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import EditForm from "./Movies/Form";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [currentMovie, setCurrentMovie] = useState({})

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route 
        path = '/update-movie/:id'
        render={props => {
          return <EditForm {...props} currentMovie={currentMovie}/>
        }}/>
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props}
           currentMovie={currentMovie} 
           setCurrentMovie={setCurrentMovie} 
           addToSavedList={addToSavedList} 
           />;
        }}
      />
      <Route
        path="/add-movie"
        render={props => {
          return <EditForm {...props}/>;
        }}
      />
    </>
  );
};

export default App;
