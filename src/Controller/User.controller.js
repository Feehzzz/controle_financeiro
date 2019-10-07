
const User = require('../Model/User.model');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


function generateToken( params = {}) {
  return jwt.sign(params, process.env.secret, {
      expiresIn: 1800000,
  });
}
module.exports = {
  async store(req,res){
    try {
      
      if(await User.findOne({ email: req.body.email})){
        return res.status(400).json({error: "Email already registered"})
      }
      const user = await User.create(req.body);
      const hash = bcryptjs.hashSync(user.password,10)
      user.password = hash;
      await user.save();
      user.password = undefined;
      return res.json({
        user, 
        token: generateToken({ id: user.id }) })
      
    } catch (error) {
      return res.status(400).json({ error: "Registration fail" + error})
    }

  }
}