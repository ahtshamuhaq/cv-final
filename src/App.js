import "./App.css";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Intro from "./Components/Intro";
import Work from "./Components/Work";

function App() {
  return (
    <div className=" pt-10 pb-10 h-[100%] w-full borda ">
      <h1 className="text-center text-3xl border-b-4   pb-5 border-indigo-500 mb-6">
        Simple CV-Designer with React.Js <br />
        (with Dynamic Input Fields)
      </h1>
      <Intro />
      <Contact />
      <Education />
      <Work />
    </div>
  );
}

export default App;
