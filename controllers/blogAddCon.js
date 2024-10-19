const blogModel = require('../models/blogModel');
const fs = require('fs');
const commentBlogData = require("../models/commentModel");
const commentModel = require('../models/commentModel');

const blogAdd = (req, res) => {

    res.render('blog-add');
}

const blogAddData = async (req, res) => {
    try {
        const blogData = new blogModel({
            path: req.file.path,
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            user_id: req.user._id
        })

        // console.log("blogData", blogData);


        const blog = await blogData.save();
        // console.log("blog", blog);
        res.redirect('/blog');
    } catch (error) {
        res.redirect('/blog-add');
    }
}

const blogEdit = async (req, res) => {

    const { id } = req.params;

    const blogData = await blogModel.findOne({ _id: id });

    // console.log("blogData", blogData);

    res.render('blog-edit.ejs', { blogData })
}

const blogUpdate = async (req, res) => {

    const { id } = req.params;

    const blogData = {
        path: req.file.path,
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    }

    try {
        const blog = await blogModel.updateOne({ _id: id }, blogData);
        res.redirect('/blog');
    } catch (error) {
        res.redirect('/blog-edit');
    }
}

const blogDelete = async (req, res) => {
    const { id } = req.params;

    const blogData = await blogModel.deleteOne({ _id: id });

    res.redirect('/blog');
}



const addComment_con = async (req, res) => {
    const blogId = req.params.id; 

    const comment = new commentModel({
        users: req.user._id, 
        blogs: blogId,
        text: req.body.comment 
    });

    console.log("comment" , comment);
    

    try {
        await comment.save();
        await blogs.findByIdAndUpdate(blogId, { $push: { comments: comment._id } });
        res.redirect('/blog'); 
    } catch (error) {
        console.error('Error adding comment:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const myBlogs = async (req, res) => {
    try {
        // Fetch comments and populate user data
        const commentData = await commentBlogData.find({}).populate("user");
        console.log("commentData", commentData);

        // Fetch blog data
        const data = await blogModel.find();
        
        // Render the EJS view and pass the data
        res.render("myBlog", { data, commentData });
    } catch (error) {
        console.error("Error fetching blog data:", error);
        res.status(500).send("Server Error");
    }
};

const commentBlog = async (req, res) => {
    try {
      const obj = new commentBlogData({
        comment: req.body.comment,
        user: req.user._id,
      });
  
      console.log("Body Is", obj);
      const blog = new commentBlogData(obj);
  
      await blog.save();
      res.redirect("/blog");
      console.log("blog", blog);
      const blogd = await commentBlogData.find({}).populate("blog");
      console.log("blogd", blogd);
    } catch {
      res.redirect("/blog");
      console.log("error");
    }
  };

module.exports = { blogAdd, blogAddData, blogEdit, blogUpdate, blogDelete , commentBlog  , addComment_con };