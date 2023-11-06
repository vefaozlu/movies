import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const APILINK =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=";

const router = express.Router();

router.route("/").get(async (req, res, next) => {
  console.log(process.env.API_KEY);
  try {
    const response = await axios.get(APILINK, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });

    const data = await response.data;
    console.log(data);

    res.render("movies", {
      movies: data.results,
    });
  } catch (e) {
    console.log(e);
  }
});

router.route("/movie/:id").get(async (req, res, next) => {
  const id = req.params.id;
  res.send(`Hello ${id}`);
});

router.route("/search").get(async (req, res, next) => {
  const query = req.query.q;

  console.log(query);

  const response = await axios.get(SEARCHAPI + query, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  });

  const data = await response.data;
  console.log(data);

  res.render("movies", {
    movies: data.results,
  });
});

export default router;
