interface Props {
  scale: 'c' | 'f';
  temperature: string;
  onTemperatureChange: (value: string) => void;
}

const TemperatureInput = ({
  scale,
  temperature,
  onTemperatureChange,
}: Props) => {
  const label = scale === 'c' ? 'Celsius' : 'Fahrenheit';

  const temp = parseFloat(temperature);
  let icon = '🌡️';

  if (!isNaN(temp)) {
    if (scale === 'c') {
      if (temp <= 0) icon = '❄️';        
      else if (temp >= 100) icon = '🔥'; 
    } else {
      if (temp <= 32) icon = '❄️';       
      else if (temp >= 212) icon = '🔥';
    }
  }

  return (
    <div className="input-group">
      <label>
        {icon} {label}
      </label>
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