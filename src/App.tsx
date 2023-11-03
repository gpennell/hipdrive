import "./App.css";
import PlateDiagram from "./PlateDiagram/PlateDiagram";
import Warmups from "./Warmups/Warmups";

function App() {
  return (
    <>
      <Warmups sets={[45, 150, 285]} activeSet={3} />
      <PlateDiagram plates={[45, 45, 5]} />
    </>
  );
}

export default App;
