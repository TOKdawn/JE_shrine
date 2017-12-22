var mongoose = require('mongoose')
var MusicDataSchema = require('./../schema/musicSchema')

mongoose.model('MusicData', MusicDataSchema)

module.exports = mongoose.model('MusicData')