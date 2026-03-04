interface Props {
  temperature: number;
  scale: 'c' | 'f';
}

const Thermometer = ({ temperature, scale }: Props) => {
  const min = scale === 'c' ? -20 : -4;  
  const max = scale === 'c' ? 100 : 212;  

  const clamped = Math.min(Math.max(temperature, min), max);
  const percentage = ((clamped - min) / (max - min)) * 100;

  const isFreezing = (scale === 'c' && temperature <= 0) || (scale === 'f' && temperature <= 32);
  const isBoiling = (scale === 'c' && temperature >= 100) || (scale === 'f' && temperature >= 212);

  return (
    <div className="thermometer-wrapper">
      <div className="thermometer">
        <div
          className="thermometer-fill"
          style={{ height: `${percentage}%` }}
        />
      </div>

      <div className="thermometer-label">
        {isBoiling ? '🔥 Boiling' : isFreezing ? '❄️ Freezing' : '🌡️ Normal'}
      </div>
    </div>
  );
};

export default Thermometer;