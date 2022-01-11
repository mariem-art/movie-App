
import "./App.css";
import { moviesData } from "./data";
import MovieList from "./components/MovieList";
import { useState } from "react";
import Search from "./components/Search";
import NewMovie from "./components/NewMovie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { navLink } from "react-dom";
import StarWars from "./Movies/StarWars";
import Home from "./Movies/Home";
import MovieDetails from "./components/MovieDetails";
import BuyMovie from "./components/BuyMovie";

function App() {
  const [movieList, setMovieList] = useState(moviesData);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);

  const handleChange = (e) => setText(e.target.value);

  const handleAdd = (newMovie) => setMovieList([...movieList, newMovie]);

  const handleRating = (x) => setRating(x);

  return (
    <div className="App">
      <Router>
        <Search
          text={text}
          handleChange={handleChange}
          rating={rating}
          handleRating={handleRating}
        />
        <Switch>
          <Route exact path="/" render={()=>
          <MovieList
          movies={movieList.filter(
            (el) =>
            el.name.toLowerCase().includes(text.toLowerCase()) &&
            el.rating >= rating
            )}
            />
          }
          />
          <Route path="/movie/:id" render={(props)=>
        <MovieDetails   movies={movieList} {...props}  />  
        }
        />
        </Switch>
        <NewMovie add={handleAdd} />
        
      </Router>
    </div>
  );
}

export default App;
