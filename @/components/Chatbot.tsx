const res = await fetch("/api/chat", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ message: userInput }),
});

let data;

try {
  data = await res.json();
} catch {
  data = { reply: "Invalid server response" };
}

setMessages([
  ...updatedMessages,
  { role: "assistant", content: data.reply || "No response" },
]);