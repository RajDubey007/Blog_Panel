const blogModel = require('../models/blogModel');
const comment_model = require("../models/commentModel");

const blog = async (req, res) => {

    let blogData = await blogModel.find();
    // console.log("blogData", blogData);


    res.render('blog', { userImg: req.user.path, fname: req.user.fname, lname: req.user.lname, email: req.user.email, blogData: blogData });

}

const myblog = async (req, res) => {

    let blogData = await blogModel.find({ user_id: req.user._id });
    // console.log("blogData", blogData);

    res.render('myblog', { userImg: req.user.path, fname: req.user.fname, lname: req.user.lname, email: req.user.email, blogData: blogData });
}

const addComentsCon = async (req, res) => {
    
    try {
      const commentAdd = new comment_model({
        comment: req.body.comment,
        userId: req.user._id,
        blogId: req.body.blogId
      });
  
      await commentAdd.save(); // Save the new comment
      console.log("Comment added successfully.");
  
      // Fetch comments for the specific blog post
      const getCommentsData = await comment_model.find({ blogId: req.body.blogId });
      console.log("Fetched comments data:", getCommentsData);
  
      // Render the blog view and pass the comments data
      res.render('blog', { comments: getCommentsData, post: req.body.post });
  
    } catch (error) {
      console.error("Error saving comment:", error);
      res.status(500).send("Internal Server Error");
    }
  };


  
module.exports = { blog, myblog , addComentsCon  };