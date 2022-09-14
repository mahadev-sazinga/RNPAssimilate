module.exports = app => {
    const blogs = require("../controllers/blogs.controller")

    var router = require("express").Router();
  
  
    // Retrieve all Blogs
    router.get("/", blogs.findAllBlogs);
  
   
  
    app.use("/api/blogs", router);
  };
  