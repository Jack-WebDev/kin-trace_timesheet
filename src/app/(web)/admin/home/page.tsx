
import axios from "axios";
import { LayoutDashboard } from "lucide-react";
import React from "react";

export default async function Home() {
  const quotes = await axios.get('https://zenquotes.io/api/today')

  console.log(quotes.data)
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">

      <p className="flex items-center gap-2 text-3xl"><LayoutDashboard size={30}/> Dashboard</p>
      <span className="text-xl">Coming Soon!</span>
      {quotes.data.map((quote:any,index:number) => {
        return <p key={index}>{quote.h}</p>
      })}
      </div>
    </div>
  );
}
