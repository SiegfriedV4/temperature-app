import { useState } from 'react';
import TemperatureInput from './TemperatureInput';
import UnitSelector from './UnitSelector';
import { convert } from '../utils/conversions';

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState<string>('');
  const [scale, setScale] = useState<'c' | 'f'>('c');

  const celsius = scale === 'c'
    ? temperature
    : temperature === '' ? '' : String(convert(Number(temperature), scale));

  const fahrenheit = scale === 'f'
    ? temperature
    : temperature === '' ? '' : String(convert(Number(temperature), scale));

  const handleCelsiusChange = (value: string) => {
    setTemperature(value);
    setScale('c');
  };

  const handleFahrenheitChange = (value: string) => {
    setTemperature(value);
    setScale('f');
  };

  return (
    <div>
      <h2>Temperature Converter</h2>
      <UnitSelector scale={scale} onScaleChange={setScale} />
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
    </div>
  );
};

export default TemperatureConverter;