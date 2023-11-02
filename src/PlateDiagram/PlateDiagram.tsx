interface PlateDiagramProps {
  plates: number[];
}

const PlateDiagram: React.FC<PlateDiagramProps> = ({ plates }) => {
  return (
    <div>
      <h2>Plate diagram</h2>
      <ul>
        {plates.map((plate, index) => (
          <li key={index}>{plate}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlateDiagram;
