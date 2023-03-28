import "./App.css";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Intro from "./Components/Intro";
import Work from "./Components/Work";

function App() {
  return (
    <div className="bg-black pt-10 pb-10 h-[100%] w-full ">
      <div className="bg-stone-600 w-[90%] h-[100%] pt-5  ml-[5%]">
        <h1 className="text-center text-3xl border-b-4 border-indigo-500 mb-6">
          Simple CV-Designer with React.Js <br />
          (with Dynamic Input Fields)
        </h1>
        <Intro />
        <h1 className="text-center text-3xl mb-2 mt-2">Contact Details</h1>
        <Contact />
        <h1 className="text-3xl text-center mb-2 mt-2 text-black">
          {" "}
          Education Details
        </h1>
        <Education />
        <h1 className="text-3xl text-center mb-2 mt-2  text-black">
          {" "}
          Work Experience
        </h1>
        <Work />
      </div>
    </div>
  );
}

export default App;
