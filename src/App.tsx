
export enum ResistorValues {
  black = 0,
  brown = 1,
  red = 2,
  orange = 3,
  yellow = 4,
  green = 5,
  blue = 6,
  violet = 7,
  grey = 8,
  white = 9
}

type Color = keyof typeof ResistorValues;

export function decodedValue([first, second]: Color[]): number {
  return Number(`${ResistorValues[first]}${ResistorValues[second]}`);
}

function App() {
  const valorResistor = decodedValue(['red', 'red']);

  console.log(`Valor del resistor decodificado: ${valorResistor}`);

  return null;
}

export default App;
