const PostModel = require('../models/post.model');

module.exports.setPosts = async (req, res) => {
  const rendez = await PostModel.create({
    name: req.body.name,
    date: req.body.date,
    hours: req.body.hours,
  });
  res.status(200).json(rendez);
};

module.exports.getPosts = async (req, res) => {
  const rendez = await PostModel.find();
  res.status(200).json(rendez);
};
