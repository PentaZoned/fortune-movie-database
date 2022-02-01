SELECT *
FROM review
JOIN movies ON review.movie_id = movies.id;