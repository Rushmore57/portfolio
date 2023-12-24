
import SideBar from "./SideBar"
import AboutSection from "./AboutSection";

const App =() => {
  return (
    <div className=" flex justify-between w-full h-full  ">
    <SideBar/>
    <AboutSection/>
    </div>
  )
}

export default App;