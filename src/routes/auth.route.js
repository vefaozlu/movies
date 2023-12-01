import express from "express";
import { User } from "../sequelize/models/User.model";

const router = express.Router();

router
  .route("/register")
  .get((req, res, next) => {
    res.render("register");
  })
  .post((req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    try {
      User.create({
        username,
        email,
        password,
      });

      res.redirect("/movies");
    } catch (e) {
      console.log(e);
    }
  });
