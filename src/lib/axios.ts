import axios from "axios";

const baseUrl = "/api/";

export async function sendPrompt(prompt: string) {
  try {
    const { data } = await axios.post(
      baseUrl,
      {
        prompt: prompt,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return data.message;
  } catch (ex) {
    return "☢️ Unable to return a response...";
  }
}
