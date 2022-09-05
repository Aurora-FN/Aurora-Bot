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

const { MessageEmbed, MessageAttachment } = require("discord.js");
module.exports.run = async (client, message, args) => {
if (message.channel.type === "dm") {
		Data.findOne({
			discord: message.author.id
		},(err, Getdata) => {
			const reason = args.slice(1).join(" ") || null
			if (reason == null) return message.channel.send(`Failed to create account. The username can't be null.`);
			//if (!Getdata) {}else{
			//	return message.channel.send("Failed to create account. The username may already be taken or you might already have an account")
			//}
			Data.findOne({ 'displayName': reason }, (err1, DataBOI1) => {
				if (DataBOI1) {
					if (DataBOI1.displayName == reason.toString()) {
						ReadyBOI = false
						return message.channel.send('Username is already in use please try again (run !setup-user again)')
					}
				}else{
					const idBOI = crypto.randomBytes(16).toString('hex')
					var ReadyBOI
					ReadyBOI = true
					const newMadeDataF = new Data3({
						id: idBOI,
						discord: message.author.id
					})
					newMadeDataF.save().catch(err1 => console.log(err1))

					//User
					const newMadeDataUSER = new Data({
						id: idBOI,
						createdAt: new Date(),
						allowsGifts: true,
						discord: message.author.id,
						displayName: reason,
						email: reason + "@Cloud.Dev",
						password: bcrypt.hashSync(idBOI, bcrypt.genSaltSync(10))
					})
					newMadeDataUSER.save().catch(err1 => console.log(err1))

					//CC
					const newMadeDataCC = new Data2({
						id: idBOI,
						discord: message.author.id,
						mtxplatform: "EpicPC"
					})
					newMadeDataCC.save().catch(err1 => console.log(err1))

					//Athena
					const newMadeDataA = new Data1({
						id: idBOI,
						discord: message.author.id,
					})
					newMadeDataA.save().catch(err1 => console.log(err1))
					const user = Data.findOne({ discord: message.author.id }).lean();
          const embed = new Discord.MessageEmbed()
						.setColor('#0077FC')
						.setTitle("Account Created!")
						.addFields(
						{ name: 'Email', value: reason + "@Cloud.Dev"},
						{ name: 'Password', value: idBOI },
					 	)
						.setTimestamp();
					return message.reply(embed)
				}
				}		
			)})
	}else{
		return message.reply("This command is only in dms")
	}
}
module.exports.config = {
	name: "setup-user",
	description: "",
	usage: "!setup-user",
	accessableby: "Members",
	aliases: ["user", "signup"]
}
