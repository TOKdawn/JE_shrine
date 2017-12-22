var mongoose = require('mongoose')
var UserDataSchema = require('./../schema/userSchema')

mongoose.model('UserData', UserDataSchema)

module.exports = mongoose.model('UserData')