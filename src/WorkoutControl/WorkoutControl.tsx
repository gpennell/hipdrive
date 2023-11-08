import { useState } from "react";

interface WorkoutControlProps {
  workSetWeight: number;
  onGenerateWorkout: (weight: number) => void;
}

const WorkoutControl: React.FC<WorkoutControlProps> = ({
  workSetWeight,
  onGenerateWorkout,
}) => {
  const [inputValue, setInputValue] = useState(workSetWeight);

  return (
    <div className="control-panel">
      <label>
        Work set weight:
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
      </label>
      <button onClick={() => onGenerateWorkout(inputValue)}>
        Generate workout
      </button>
    </div>
  );
};

export default WorkoutControl;
