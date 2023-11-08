import { useState } from "react";
import "./App.css";
import PlateDiagram from "./PlateDiagram/PlateDiagram";
import Warmups from "./Warmups/Warmups";
import WorkoutControl from "./WorkoutControl/WorkoutControl";
import { addWeights, calcWarmupSets } from "./utils/WeightCalcs";

function App() {
  // Initial values
  const [workSetWeight, setWorkSetWeight] = useState(45);
  const [plates, setPlates] = useState<number[]>([]);
  const [sets, setSets] = useState<number[]>([]);

  const onGenerateWorkout = (newWeight: number) => {
    setWorkSetWeight(newWeight);
    setSets(calcWarmupSets(4, 45, 0.1, workSetWeight));
    setPlates(addWeights(45, workSetWeight, [2.5, 5, 10, 25, 35, 45]));
  };

  return (
    <>
      <WorkoutControl
        workSetWeight={workSetWeight}
        onGenerateWorkout={onGenerateWorkout}
      />
      <Warmups sets={sets} activeSet={3} />
      <PlateDiagram plates={plates} />
    </>
  );
}

export default App;
