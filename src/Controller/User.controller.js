const User = require('../Model/User.model');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// função para gerar jsonwebtoken que expira em 1 hora
function generateToken( params = {}) {
  return jwt.sign(params, process.env.secret, {
      expiresIn: '1h',
  });
}
module.exports = {
  async register(req,res){
    try {
      if(await User.findOne({ email: req.body.email})){
        return res.status(400).json({error: "Email already registered"})
      }
      const user = await User.create(req.body);
      const hash = bcryptjs.hashSync(user.password,10)
      user.password = hash;
      await user.save();
      // evitando que senha retorne ao registrar-se 
      user.password = undefined;
      return res.json({
        user, 
        token: generateToken({ id: user.id }) })
      
    } catch (error) {
      return res.status(400).json({ error: "Registration fail" + error})
    }
  },
  async auth(req,res) {
    try {
      const { email, password} = req.body
      const user = await User.findOne({ email }).select('+password');
      if(!user){
        return res.status(404).json({error: "User not found"})
      }
      if(!await bcryptjs.compare(password, user.password)){
        return res.status(404).json({error: "Invalid email or password"})
      }
      const now = new Date()
      user.password = undefined;
      user.updatedAt = now
      
      return res.json({
        user,
        token: generateToken({id: user.id})})
    } catch (error) {
      return res.status(400).json({ error: "Something went wrong " + error})
    }
  },
  
  
}