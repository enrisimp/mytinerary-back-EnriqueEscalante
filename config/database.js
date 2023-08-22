import mongoose from "mongoose";

let url_link = process.env.MONGO;

mongoose.connect(url_link)
  .then(() => console.log('database connect'))
  .catch(error => console.log(error));
// main().catch((err) => console.log(err));

/* async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
} */
