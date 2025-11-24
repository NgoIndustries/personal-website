"use client"

import { useEffect, useRef } from "react"

export default function BlinkingTitle({PageTitle, FlashAmount = 3}:{PageTitle:String, FlashAmount?:number}){


  const flashedRef = useRef<boolean>(false);
  const blinkRef = useRef<NodeJS.Timeout | null>(null);
  const divElementRef = useRef<HTMLDivElement | null>(null);
  const flashAmount = useRef<number>(0);

  useEffect(() => {
    blinkRef.current = setInterval(() => {
      if(!(flashAmount.current > FlashAmount)){
      if(!flashedRef.current){
        divElementRef.current.textContent = "";
      }else{
        divElementRef.current.textContent = PageTitle.valueOf();
      }
      flashedRef.current = !flashedRef.current;
      flashAmount.current += 1;
    }else{
      clearInterval(blinkRef.current);
      divElementRef.current.textContent = PageTitle.valueOf()
    }},100)
  },[])


  // return <div ref={divElementRef} className="h-24 text-white font-helvetica_now text-9xl w-full mt-5 ml-5">
  return <div ref={divElementRef} className="h-24 text-white font-ferrite_core_dx text-7xl w-full mt-5 ml-5">
      {PageTitle}
    </div>
  
}