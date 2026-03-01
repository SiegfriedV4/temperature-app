export const toFahrenheit = (celsius: number): number =>
  (celsius * 9) / 5 + 32;

export const toCelsius = (fahrenheit: number): number =>
  ((fahrenheit - 32) * 5) / 9;

export const convert = (
  temperature: number,
  scale: 'c' | 'f'
): number => {
  if (scale === 'c') {
    return toFahrenheit(temperature);
  } else {
    return toCelsius(temperature);
  }
};