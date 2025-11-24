"use client"

import { useEffect, useRef } from "react"

export default function TypeWriterSubtitle({SubtitleContent}:{SubtitleContent:String}){
  const SubtitlePrint = useRef<String>("");
  const slowPrintRef = useRef<NodeJS.Timeout | null>(null);
  const TitleCurrentIndex = useRef<number>(0);
  const h2ElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      slowPrintRef.current = setInterval(() => {
       if(TitleCurrentIndex.current < SubtitleContent.length){
         SubtitlePrint.current = SubtitleContent.substring(0, TitleCurrentIndex.current);
         h2ElementRef.current.textContent = SubtitlePrint.current.valueOf();
       }
  
       TitleCurrentIndex.current += 1;
  
       if(TitleCurrentIndex.current == SubtitleContent.length){
         clearInterval(slowPrintRef.current);
         h2ElementRef.current.textContent = SubtitleContent.valueOf()
       }
     }, 50)
    },600)
    return () => clearTimeout(timer);
  },[])
  return <h2 ref={h2ElementRef} className="h-24 text-gray-400 text-4xl font-helvetica_now w-full mt-5 ml-5"/>
}