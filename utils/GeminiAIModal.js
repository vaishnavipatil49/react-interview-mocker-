const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMIN_API_KEY;
  if (!apiKey) {
    console.error("API key is missing. Please set NEXT_PUBLIC_GEMIN_API_KEY in your environment variables.");
    process.exit(1);
  }
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  const startChatSession = () => {
    return model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              text: "Job Position: Full Stack Developer, Job Description: React, Node.js, MySQL, Years of Experience: 6. Based on this information, please give me 5 interview questions with answers in JSON format.",
            },
          ],
        },
      ],
    });
  };
  
  const chatSession = startChatSession();
  
  const fetchInterviewQuestions = async (inputPrompt) => {
    try {
      const result = await chatSession.sendMessage(inputPrompt);
      const responseText = await result.response.text();
      console.log("Generated Interview Questions and Answers:");
      console.log(responseText);
    } catch (error) {
      console.error("Error fetching interview questions:", error);
    }
  };
  
  module.exports = { chatSession, fetchInterviewQuestions };
  