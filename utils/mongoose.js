const mongoose = require ("mongoose");
mongoose.set('useFindAndModify', false);

module.exports = function (DB_NAME){
    mongoose.connect (`mongodb://localhost/${DB_NAME}`, {useNewUrlParser: true});
    require('../models/pet');
}
//handles the database connection