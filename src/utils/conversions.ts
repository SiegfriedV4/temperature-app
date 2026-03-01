export const toFahrenheit = (celsius: number): number => (celsius * 9) / 5 + 32;

export const toCelsius = (fahrenheit: number): number =>
  ((fahrenheit - 32) * 5) / 9;

export const convert = (temperature: number, scale: "c" | "f"): number => {
  switch (scale) {
    case "c":
      return toFahrenheit(temperature);
    case "f":
      return toCelsius(temperature);
    default:
      throw new Error("Invalid scale");
  }
};
