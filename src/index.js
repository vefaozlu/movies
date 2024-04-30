import app from "./server.js";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const port = 4000;

app.listen(port, () => {
  console.log(`Listenning on port ${port}`);
});
