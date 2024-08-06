import { quotes } from "@/enum/constants";

export const getDailyQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};
