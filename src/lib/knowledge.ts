export const knowledgeBase = [
  {
    keywords: ["neurodyn", "company", "what do you do", "about"],
    answer: "NeuroDyn Tech Solutions specializes in Hybrid Vehicle Engineering, EV Retrofit Systems, AI-driven energy optimization, and intelligent mobility solutions."
  },
  {
    keywords: ["services", "offer", "what services", "solutions"],
    answer: "We offer EV retrofit, hybrid bus architecture, powertrain integration, AI energy systems, and fleet modernization solutions."
  },
  {
    keywords: ["ev", "electric vehicle", "retrofit", "conversion"],
    answer: "Our EV retrofit solutions convert existing vehicles to electric power, reducing emissions and operational costs while maintaining vehicle performance."
  },
  {
    keywords: ["hybrid", "hybrid systems", "hybrid bus"],
    answer: "We develop hybrid vehicle architectures that combine electric and conventional power sources for optimal efficiency and reduced environmental impact."
  },
  {
    keywords: ["ai", "artificial intelligence", "ai mobility", "energy optimization"],
    answer: "Our AI-driven systems optimize energy consumption, predict maintenance needs, and enhance fleet management through intelligent data analysis."
  },
  {
    keywords: ["vision", "future", "goals"],
    answer: "Our vision is to become a leading Indian technology partner in Hybrid & EV Retrofit Engineering."
  },
  {
    keywords: ["mission", "purpose", "objectives"],
    answer: "Our mission includes electrification of fleets, reducing emissions, and building AI-driven mobility systems."
  },
  {
    keywords: ["contact", "email", "phone", "reach"],
    answer: "You can contact NeuroDyn Tech Solutions at info@neurodyn.in for inquiries about our services and solutions."
  },
  {
    keywords: ["pricing", "cost", "price", "rates"],
    answer: "For pricing information on our EV retrofit, hybrid systems, and AI mobility solutions, please contact us directly at info@neurodyn.in."
  },
  {
    keywords: ["location", "where", "address", "based"],
    answer: "NeuroDyn Tech Solutions is based in India, serving clients nationwide with our innovative vehicle engineering solutions."
  }
];

export function findLocalAnswer(message: string): string | null {
  // 🛑 Input validation
  if (!message || typeof message !== "string") {
    return null;
  }

  const normalizedMessage = message.toLowerCase().trim();
  
  if (!normalizedMessage) {
    return null;
  }
  
  let bestMatch = null;
  let maxKeywordMatches = 0;
  
  try {
    for (const entry of knowledgeBase) {
      if (!entry?.keywords || !Array.isArray(entry.keywords) || !entry?.answer) {
        continue; // Skip invalid entries
      }

      const matchCount = entry.keywords.filter(keyword => 
        keyword && normalizedMessage.includes(keyword.toLowerCase())
      ).length;
      
      if (matchCount > maxKeywordMatches && matchCount > 0) {
        maxKeywordMatches = matchCount;
        bestMatch = entry.answer;
      }
    }
  } catch (error) {
    console.error("Error in findLocalAnswer:", error);
    return null;
  }
  
  return bestMatch;
}
