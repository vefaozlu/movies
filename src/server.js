import express from "express";
import router from "./routes/movies.route.js";

const app = express();

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../public"));

app.use("/movies", router);
app.use("/", (req, res) => res.send("Movies website"));

export default app;
