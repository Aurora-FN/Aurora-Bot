const Discord = require("discord.js");
const mongoose = require('mongoose');
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const config = require(`../config.json`);
//Connect
mongoose.connect(`${config.mon}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
	console.log(`${config.log} Connected to the database!`);
}).catch((err) => {
	console.log(err);
})

const Data = require('../models/user')
const Data1 = require('../models/athena')
const Data2 = require('../models/commoncores')
const Data3 = require('../models/friends')
module.exports.run = async (client, message, args) => {
	Data.findOne({
		discord: message.author.id
	}, (err, Getdata) => {
		if (err) console.log(err);
		const reason = args.slice(1).join(" ") || null
		if (Getdata) {} else {
				return message.reply("You dont have an account! Please do !setup-user {username} in DMs with me eg : !setup-user Cloud V3")
		}
		const idBOI = crypto.randomBytes(16).toString('hex')
		var ReadyBOI
					ReadyBOI = true
			const newMadeDataF = delete Data3({
			     id: idBOI,
					 userId: message.author.id
					})
										
					//User
					const newMadeDataUSER = delete Data({
						id: idBOI,
						createdAt: new Date(),
						allowsGifts: true,
						discord: message.author.id,
						displayName: reason,
						email: reason + "@Cloud.Dev",
						password: bcrypt.hashSync(idBOI, bcrypt.genSaltSync(10))
					})

					//CC
					const newMadeDataCC = delete Data2({
						id: idBOI,
						userId: message.author.id,
						mtxplatform: "EpicPC"
					})

					//Athena
					const newMadeDataA = delete Data1({
							id: idBOI,
						discord: message.author.id,
					})
			// lol = Data.collection.findOne({"userId": message.author.id}, {"displayName": String})	
			
		   Data.collection.findOneAndDelete({"discord": message.author.id})
			 Data1.collection.findOneAndDelete({"discord": message.author.id})
			 Data2.collection.findOneAndDelete({"userId": message.author.id})
			 Data3.collection.findOneAndDelete({"userId": message.author.id})
			//	client.channels.cache.get("863414657225850910").send(embed699)
			 return message.channel.send(`Deleted User Please Make An New Account`)
				
		})
	
	}
module.exports.config = {
	name: "del-user",
	description: "",
	usage: "C!setup-user",
	accessableby: "Members",
	aliases: ["delete", "del"]
}
