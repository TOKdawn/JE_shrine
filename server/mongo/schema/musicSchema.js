var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId;

var MusicDataSchema = new Schema({
    from: { type: ObjectId, ref: 'UserDataModel' },
    title: String,
    author: String,
    singer: String,
    content: String,
    cover: String,
    tags: Array,
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
})

MusicDataSchema.pre('save', function(next) {
    // 判断是否为新建，更改时间
    if (this.isNew) {
        this.createAt = this.updateAt = Date.now();
    } else {
        this.updateAt = Date.now();
    }

    next();
});


module.exports = MusicDataSchema