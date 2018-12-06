import React, { Component } from 'react';

class ListFavoriteMovies extends Component {
  renderFavoriteMovie(favoriteMovie) {
    const { user, movie, profileID } = favoriteMovie;

    return (
      <li key={profileID}>{user.name} favorite movie is {movie.name}.</li>
    );
  }

  render() {
    return (
      <ul>
        {this.props.favoriteMovies.map(favoriteMovie => this.renderFavoriteMovie(favoriteMovie))}
      </ul>
    );
  }
}

export default ListFavoriteMovies;
