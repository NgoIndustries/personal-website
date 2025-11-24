"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function HeaderNavigationBar({PageList}:{PageList: Array<String>}){

  const PathName = usePathname();

  const styleString = "flex bg-black text-white flex-1/2 justify-center text-4xl pt-5 pb-5 pl-5 pr-5 mt-8 ml-5 mr-10 font-helvetica_now transition delay-75 ease-in-out hover:bg-white hover:text-black"

  const MenuItems = PageList.map((predicate, index) => {
    //note - the whitespace before underline is required for proper CSS formatting.
    return <a className={PathName.valueOf().includes(predicate.valueOf()) ? styleString + " underline" : styleString } key={index} href={ "/" + predicate }>{predicate}</a>
  })

  return <div className="flex flex-row">
      {MenuItems}
    </div>
  
}