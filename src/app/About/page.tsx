
import BlinkingTitle from "../../components/BlinkingTitle"
import HeaderNavigationBar from "../../components/HeadNavigation"
import TypeWriterSubtitle from "../../components/TypewriterSubtitle"

export default function Page() {
  return <div className=" min-h-screen bg-black">
      <div className="flex justify-self-start ml-5">
        <BlinkingTitle PageTitle={"About Me."} FlashAmount={4}/>
        <HeaderNavigationBar PageList={["About","Works","Sites"]} />
      </div>
      <div className="flex justify-self-start ml-5">
        <TypeWriterSubtitle SubtitleContent={"Get to know me."} />
      </div>
      <div className="flex justify-self-start ml-10">
        <p className="font-helvetica_now text-white text-2xl w-1/2">
          I'm a software engineer from West Jordan, Utah. I graduated 2023 from Neumont College of Computer Science with a 3.92 GPA and a love for all things software. 
        </p>

      </div>
    </div>
  
}