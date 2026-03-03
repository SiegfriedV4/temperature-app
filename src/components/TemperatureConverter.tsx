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

  return (
    <div className="container">
      <div className="card">
        <UnitSelector scale={scale} onScaleChange={setScale} />
      </div>

      <div className="card">
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={(value) => {
            setTemperature(value);
            setScale('c');
          }}
        />
      </div>

      <div className="card">
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={(value) => {
            setTemperature(value);
            setScale('f');
          }}
        />
      </div>
    </div>
  );
};

export default TemperatureConverter;