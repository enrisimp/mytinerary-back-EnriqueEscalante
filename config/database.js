import mongoose from "mongoose";

let url_link = process.env.MONGO;

mongoose.connect(url_link)
  .then(() => console.log('database connect'))
  .catch(error => console.log(error));
// main().catch((err) => console.log(err));

