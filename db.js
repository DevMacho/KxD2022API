import mongoose from 'mongoose'

const botConnection = mongoose.createConnection("mongodb+srv://host:0000@cluster0.9mvcx0e.mongodb.net/?retryWrites=true&w=majority");


const BotSchema = new mongoose.Schema({
    botId: String,
    heartUsers: Array
});

export const Bot = botConnection.model("Bot", BotSchema);
