export default async function handler(req, res){

const {title, description, keywords} = JSON.parse(req.body);

const optimized = {
title: title + " | Professional Fiverr Service",
description: description + " Delivered with high quality and SEO optimization.",
keywords: keywords + ", fiverr, freelance",
score: "85/100"
};

res.status(200).json(optimized);

}