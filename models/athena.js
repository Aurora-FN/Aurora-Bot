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
    level: {
        type: Number,
        default: 100
    },
		stars: {
        type: Number,
        default: 69
    },
    stage: {
        type: String,
        default: "season12"
    },
    banner: {
        type: String,
        default: ""
    },
    bannercolor: {
        type: String,
        default: ""
    },
    character: {
        type: String,
        default: "CID_001_Athena_Commando_F_Default"
    },
    charactervariants: {
        type: Array,
        default: ""
    },
    backpack: {
        type: String,
        default: ""
    },
    backpackvariants: {
        type: Array,
        default: ""
    },
    pickaxe: {
        type: String,
        default: "DefaultPickaxe"
    },
    pickaxevariants: {
        type: Array,
        default: ""
    },
    glider: {
        type: String,
        default: ""
    },
    glidervaraints: {
        type: Array,
        default: ""
    },
    skydivecontrail: {
        type: String,
        default: ""
    },
    dance: {
        type: Array,
        default: [
            "",
            "",
            "",
            "",
            "",
            "",
        ]
    },
    itemwrap: {
        type: Array,
        default: [
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ]
    },
    musicpack: {
        type: String,
        default: ""
    },
	profilerevision: {
        type: Number,
        default: 1
    },
	vbucks: {
        type: Number,
        default: 2130
    },
    loadingscreen: {
        type: String,
        default: ""
    }
})

module.exports = mongooes.model("athena", data101);
