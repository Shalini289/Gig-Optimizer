import mongoose from "mongoose";

const gigSchema = new mongoose.Schema({

title: String,

description: String,

keywords: String,

optimizedTitle: String,

optimizedDescription: String,

seoKeywords: String,

gigScore: String,

createdAt:{
type:Date,
default:Date.now
}

});

export default mongoose.model("Gig", gigSchema);