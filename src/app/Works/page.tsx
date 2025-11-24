
import BlinkingTitle from "../../components/BlinkingTitle"
import HeaderNavigationBar from "../../components/HeadNavigation"
import TypeWriterSubtitle from "../../components/TypewriterSubtitle"

export default function Page() {
  return <div className=" min-h-screen bg-black">
      <div className="flex justify-self-start ml-5">
        <BlinkingTitle PageTitle={"Personal Works."} FlashAmount={4}/>
        <HeaderNavigationBar PageList={["About","Works","Sites"]} />
      </div>
      <div className="flex justify-self-start ml-5">
        <TypeWriterSubtitle SubtitleContent={"Personal projects and models I've made."} />
      </div>
      {/* <div className="h-24 text-white font-helvetica_now text-9xl"> */}
      {/* <div className="h-24 text-white text-9xl font-ferrite_core_dx"> */}
        {/* Welcome to the future. */}
      {/* </div> */}
    </div>
  
}