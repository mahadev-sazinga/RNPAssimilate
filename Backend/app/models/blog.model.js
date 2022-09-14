module.exports = (sequelize, Sequelize) => {
    const blog = sequelize.define("blog", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      Image: {
        type: Sequelize.STRING
      },
    });

  
    return blog;
  };
  