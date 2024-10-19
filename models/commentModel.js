const mongoose = require("mongoose");

const comment = new mongoose.Schema({
  comment: {
    type: String,
    require: true,
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blogs",
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    require: true,
  },
});

module.exports = mongoose.model("commentBlog", comment);
