const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.db_user}:${process.env.db_pass}@${process.env.db_host}`,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);
module.exports = mongoose;

