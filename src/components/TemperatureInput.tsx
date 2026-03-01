interface Props {
  scale: 'c' | 'f';
  temperature: string;
  onTemperatureChange: (value: string) => void;
}

const TemperatureInput = ({ scale, temperature, onTemperatureChange }: Props) => {
  let label;

  if (scale === 'c') {
    label = 'Celsius';
  } else {
    label = 'Fahrenheit';
  }

  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
        placeholder={`Enter ${label}`}
      />
    </div>
  );
};

export default TemperatureInput;