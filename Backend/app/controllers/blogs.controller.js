
const db = require("../models");

const BLOGS = db.blog;

exports.findAllBlogs = (req, res) => {
  

  BLOGS.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
