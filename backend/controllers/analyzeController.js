export const analyzeGig = (req, res) => {

const { title, description, keywords } = req.body;

let score = 0;

if (title.length >= 20 && title.length <= 80) {
  score += 30;
}

if (description.length >= 200) {
  score += 30;
}

if (keywords && keywords.length > 5) {
  score += 20;
}

if (description.includes(keywords.split(",")[0])) {
  score += 20;
}

res.json({
  titleLength: title.length,
  descriptionLength: description.length,
  score
});

};