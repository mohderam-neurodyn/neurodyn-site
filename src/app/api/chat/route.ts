import OpenAI from "openai";
import { findLocalAnswer } from "@/lib/knowledge";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("BODY:", body);

    // 🎯 Extract user message - handle both formats
    let message = "";

    if (body?.messages && Array.isArray(body.messages)) {
      // Extract last user message from conversation history
      const userMessages = body.messages.filter(msg => msg?.role === "user");
      if (userMessages.length > 0) {
        const lastUserMessage = userMessages[userMessages.length - 1];
        message = lastUserMessage?.content || "";
      }
    } else {
      // Fallback to direct message formats
      message = body?.message || body?.input || body?.query || "";
    }

    // 🛑 Validate message
    if (!message || typeof message !== "string" || !message.trim()) {
      return Response.json({
        reply: "Please type a message.",
        source: "error",
      });
    }

    // 🟢 Local check
    const localReply = findLocalAnswer(message);

    if (localReply) {
      return Response.json({
        reply: localReply,
        source: "local",
      });
    }

    // 🔵 AI fallback
    try {
      // Prepare messages for OpenAI with proper types
      let openaiMessages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
        {
          role: "system",
          content: "You are NeuroDyn AI assistant. Answer professionally about EV, hybrid systems, AI mobility, and company services."
        }
      ];

      // Add conversation history if available
      if (body?.messages && Array.isArray(body.messages)) {
        openaiMessages = openaiMessages.concat(
          body.messages
            .filter(msg => msg?.role && msg?.content && (msg.role === "user" || msg.role === "assistant"))
            .map(msg => ({
              role: msg.role as "user" | "assistant",
              content: msg.content
            }))
        );
      } else {
        // Single message mode
        openaiMessages.push({
          role: "user",
          content: message
        });
      }

      const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: openaiMessages,
      });

      return Response.json({
        reply: response.choices[0]?.message?.content || "Sorry, I couldn't understand that.",
        source: "ai",
      });
    } catch (err: any) {
      console.error("OpenAI error:", err);

      return Response.json({
        reply: "AI service temporarily unavailable. Contact us at info@neurodyn.in",
        source: "fallback",
      });
    }
  } catch (error) {
    console.error("API ERROR:", error);

    return Response.json({
      reply: "Something went wrong. Please try again.",
      source: "error",
    });
  }
}