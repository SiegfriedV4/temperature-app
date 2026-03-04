import type { JSX } from "react";

interface Props {
    scale: 'c' | 'f';
    onScaleChange: (scale: 'c' | 'f') => void;
}

const UnitSelector = ({ scale, onScaleChange}: Props): JSX.Element => {
    return (
        <select
            value={scale}
            onChange={(e) => onScaleChange(e.target.value as 'c' | 'f')}
        >
        <option value="c">Celsius</option>
        <option value="f">Fahrenheit</option>
    </select>
    );
};

export default UnitSelector;