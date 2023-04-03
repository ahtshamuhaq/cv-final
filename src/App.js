import "./App.css";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Intro from "./Components/Intro";
import Work from "./Components/Work";

function App() {
  return (
    <div className=" h-[100%] w-full borda bg-[#EAEAEA] ">
      <h1 className="text-center text-3xl border-b-4] bg-slate-500  pb-5 pt-5 border-indigo-500 ">
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
