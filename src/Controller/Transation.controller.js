const Transation = require('../Model/Transation.model');
const User = require('../Model/User.model');

module.exports = {
  async index(req,res) {
    try {
      const transation = await Transation.find({user: req.userId});
      const user = await User.findById(req.userId)
      
      user.email = undefined;
      user.createdAt = undefined;
      user.updatedAt = undefined;
      
      return res.json({user, transations: transation});

    } catch (error) {
      return res.status(400).json({error: "Something went wrong " + error});
    }
  },
  async store(req,res){
    const { description, value, transationType } = req.body
    const user = await User.findOne({_id: req.userId})
    try {
      const transation = await Transation.create({
      user: req.userId,
      description,
      value,
      transationType
    })
    
    if(transationType === 'exp'){
      await user.updateOne({ wallet: user.wallet = user.wallet - value })
    }
    if(transationType === 'inc'){
      await user.updateOne({ wallet: user.wallet = user.wallet + value }) 
    }
    await transation.populate('user').populate('transation').execPopulate();
    return res.json(transation)
    } catch (error) {

      return res.status(400).json({Error: "Something went wrong " + error}) 
    }
    
  },
}