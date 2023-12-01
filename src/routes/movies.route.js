import express from "express";
import Endpoints from "../../axios/Endpoints.js";

const router = express.Router();

router.route("/").get(async (req, res, next) => {
  Endpoints.getMovies((error, data) => {
    if (error) {
      console.error("Error fetching movies:", error);
    } else {
      console.log("Movies:", data);
      res.render("movies", {
        movies: data.results,
      });
    }
  });
});

router.route("/movie/:id").get(async (req, res, next) => {
  const id = req.params.id;
  res.send(`Movie ${id}`);
});

router.route("/search").get(async (req, res, next) => {
  const query = req.query.q;

  Endpoints.searchMovie(query, (error, data) => {
    if (error) {
      console.error("Error fetching movies:", error);
    } else {
      console.log("Fetch Successfull", data);
      res.render("movies", {
        movies: data.results,
      });
    }
  });
});

export default router;
