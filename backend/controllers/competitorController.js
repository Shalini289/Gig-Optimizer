import axios from "axios";
import cheerio from "cheerio";

export const analyzeCompetitor = async (req,res)=>{

const { url } = req.body;

const response = await axios.get(url);

const $ = cheerio.load(response.data);

const title = $("title").text();

res.json({
title
});

};