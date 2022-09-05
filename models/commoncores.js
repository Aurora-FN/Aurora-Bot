const mongooes = require('mongoose');

const data101 = mongooes.Schema({
    id: {
        type: String,
        required: true,
    },
		discord: {
       type: String,
       required: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    vbucks: {
        type: Number,
        default: 54788
    },
    mtxplatform: {
        type: String,
        default: "EpicPC"
    },
    gifts: {
        type: Array,
        default: []
    }
})

module.exports = mongooes.model("commoncores", data101);
