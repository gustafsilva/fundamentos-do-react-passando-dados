export const getFavoriteMovies = (profiles, users, movies) => {
	const favoriteMovies = profiles.map((profile) => {
      	const { id, userID, favoriteMovieID } = profile;
    	const user = users[userID];
    	const movie = movies[favoriteMovieID];
      
    	return {
        	user,
          	movie,
          	profileID: id
        };
    });
  
	return favoriteMovies;
}
