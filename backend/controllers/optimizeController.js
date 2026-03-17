import Groq from "groq-sdk";

export const optimizeGig = async (req, res) => {

  try {

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY
    });

    const { title, description, keywords } = req.body;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content: `
Optimize this Fiverr gig.

Title: ${title}
Description: ${description}
Keywords: ${keywords}

Return ONLY JSON:

{
 "optimizedTitle": "",
 "optimizedDescription": "",
 "seoKeywords": [],
 "gigScore": ""
}
`
        }
      ]
    });

    const text = completion.choices[0].message.content;

    console.log("RAW AI:", text);

    // Extract JSON safely
    const match = text.match(/\{[\s\S]*\}/);

    if (!match) {
      throw new Error("No JSON found in AI response");
    }

    const data = JSON.parse(match[0]);

    res.json(data);

  } catch (error) {

    console.error("FULL ERROR:", error.message);

    res.status(500).json({
      error: error.message
    });

  }

};