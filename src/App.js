import "./App.css";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Intro from "./Components/Intro";
import Work from "./Components/Work";

function App() {
  return (
    <div className=" h-[100%] w-full ">
      <Intro />
      <Contact />
      <Education />
      <Work />
    </div>
  );
}

export default App;
