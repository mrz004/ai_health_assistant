import { OpenAI } from "openai";

// const messages = [{role: "system", message: "You are a expert health consultant. Guide the user with his health issues."}];
const messages = [];

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

const askOpenAI = async (text) => {
  console.log(text);
  messages.push({ role: "user", message: text });
  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: text }],
      model: "gpt-4",
    });

    const generatedText = response?.choices[0]?.message?.content;
    console.log(response);
    console.log(generatedText);
    // return generatedText;
    // messages.push({ role: "user", message: text });

    return generatedText;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return "Error generating response.";
  }
};

export default askOpenAI;
