"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, Minimize2, Maximize2, MessageCircle } from "lucide-react";

export default function Chatbot() {
  const [messages, setMessages] = useState<{ role: string; content: string; source?: string }[]>([
    { role: "assistant", content: "Hello! I'm NeuroDyn's AI assistant. How can I help you today?", source: "local" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMinimize = () => {
    if (!isMinimized) {
      setUnreadCount(0);
    }
    setIsMinimized(!isMinimized);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isMinimized && messages.length > 1) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.role === "assistant") {
        setUnreadCount(prev => prev + 1);
      }
    }
  }, [messages, isMinimized]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      let data;
      
      try {
        data = await res.json();
      } catch (parseError) {
        console.error("Response parse error:", parseError);
        data = { reply: "Invalid server response", source: "error" };
      }

      const reply = data?.reply || "Sorry, I couldn't process your request.";
      const source = data?.source || "error";
      
      setMessages([...updatedMessages, { role: "assistant", content: reply, source }]);
    } catch (err) {
      console.error("Network error:", err);
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: "⚠️ Connection error. Please try again.", source: "error" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const getSourceIcon = (source?: string) => {
    switch (source) {
      case "local":
        return <Sparkles className="w-3 h-3 text-green-500" />;
      case "ai":
        return <Bot className="w-3 h-3 text-blue-500" />;
      case "fallback":
        return <span className="w-3 h-3 text-orange-500">⚠️</span>;
      default:
        return <Bot className="w-3 h-3 text-gray-500" />;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isMinimized ? (
        // Minimized state
        <div 
          className="relative w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all shadow-lg"
          onClick={toggleMinimize}
        >
          <MessageCircle className="w-6 h-6 text-white" />
          {unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              {unreadCount}
            </div>
          )}
        </div>
      ) : (
        // Expanded state
        <div className="w-96 h-[500px] bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-sm border-b border-white/10 p-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm leading-tight">NeuroDyn Assistant</h3>
                  <p className="text-white/60 text-xs">Your AI mobility expert</p>
                </div>
              </div>
              <button
                className="w-8 h-8 text-white/60 hover:text-white transition-colors hover:bg-white/10 rounded-full flex items-center justify-center"
                onClick={toggleMinimize}
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0 bg-gradient-to-b from-transparent to-blue-900/5">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 animate-fade-in ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div
                  className={`max-w-[75%] p-3 rounded-2xl break-words ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-sm shadow-md"
                      : "bg-white/15 backdrop-blur-sm border border-white/25 text-white rounded-bl-sm shadow-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                  {msg.role === "assistant" && msg.source && (
                    <div className="flex items-center gap-1 mt-2 opacity-70">
                      {getSourceIcon(msg.source)}
                      <span className="text-xs">
                        {msg.source === "local" ? "Knowledge Base" : 
                         msg.source === "ai" ? "AI Response" : "System"}
                      </span>
                    </div>
                  )}
                </div>

                {msg.role === "user" && (
                  <div className="w-7 h-7 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            
            {loading && (
              <div className="flex gap-3 justify-start">
                <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white/15 backdrop-blur-sm border border-white/25 p-3 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-2">
                  <span className="text-xs text-white/70">Thinking</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white/5 backdrop-blur-sm border-t border-white/10 flex-shrink-0">
            <div className="flex gap-2">
              <input
                className="flex-1 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2.5 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                disabled={loading}
              />
              <button
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 shadow-md"
                onClick={sendMessage}
                disabled={loading || !input.trim()}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
