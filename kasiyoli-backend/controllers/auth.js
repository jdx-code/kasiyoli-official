const passport = require('passport')
const validator = require('validator')
const User = require('../models/User')

exports.getIndex = (req, res) => {
  if (req.isAuthenticated()) {
    return res.status(200).json({ authenticated: true });
  }
  
  return res.status(401).json({ authenticated: false });
};
