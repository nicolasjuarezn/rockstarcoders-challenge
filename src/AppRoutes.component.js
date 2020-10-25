import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MovieDetail } from "./movie-detail/MovieDetail.component";
import { DiscoverMovies } from "./discover-movies/DiscoverMovies.component";

export function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={(props) => <DiscoverMovies {...props} />}
        />
        <Route
          path="/movie/:id"
          exact
          component={(props) => <MovieDetail {...props} />}
        />
      </Switch>
    </Router>
  );
}
