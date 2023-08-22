import 'dotenv/config.js';
import '../../config/database.js';
import Category from '../Category.js';

let categories = [
  {
    name: "shonen",
    color: "#EF8481",
    create_by: "object id del usuario 1",
  },
  {
    name: "comics",
    color: "#F7950C",
    create_by: "object id del usuario 2",
  },
];

Category.insertMany(categories)