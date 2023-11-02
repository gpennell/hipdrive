interface WarmupsProps {
  sets: number[];
  activeSet: number;
}

const Warmups: React.FC<WarmupsProps> = ({ sets, activeSet }) => {
  return (
    <div role="list" className="warmup-sets">
      {sets.map((set, index) => (
        <button
          key={index}
          role="listitem"
          aria-current={index === activeSet ? "true" : undefined}
        >
          {set}
        </button>
      ))}
    </div>
  );
};

export default Warmups;
