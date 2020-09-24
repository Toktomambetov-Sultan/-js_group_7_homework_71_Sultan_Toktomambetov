import CalculateUnit from "./Char";
import FormatDisplay from "./FormatDisplay";
const GetCalculateUnits = (display) => {
  const format = new FormatDisplay(display);
  return [
    new CalculateUnit("AC", { func: (display) => "" }),

    new CalculateUnit("<", {
      func: (display) => {
        return display.slice(0, -1);
      },
      disabled: !display,
    }),

    new CalculateUnit("%", {
      callback: () => {
        console.log(format.numbers[1]);
        if (format.numbers.length === 1) {
          format.numbers[0] /= 100;
        } else {
          format.numbers[1] = format.numbers[0] * format.numbers[1] * 0.01;
        }
      },
      func: (display) => format.get(),
    }),

    new CalculateUnit("/", {
      func: (display) => display + "/",
      disabled: format.numbers.length >= 2 || !display,
    }),

    new CalculateUnit("7"),

    new CalculateUnit("8"),

    new CalculateUnit("9"),

    new CalculateUnit("x", {
      func: (display) => display + "*",
      disabled: format.numbers.length >= 2 || !display,
    }),

    new CalculateUnit("4"),

    new CalculateUnit("5"),

    new CalculateUnit("6"),

    new CalculateUnit("-", {
      func: (display) => display + "-",
      disabled: format.numbers.length >= 2,
    }),

    new CalculateUnit("1"),

    new CalculateUnit("2"),

    new CalculateUnit("3"),

    new CalculateUnit("+", {
      func: (display) => display + "+",
      disabled: format.operations.length >= 2,
    }),

    new CalculateUnit("00", {
      disabled:
        format.operations[format.operations.length - 1] === "/" &&
        format.numbers[format.numbers.length - 1] === "",
    }),

    new CalculateUnit("0", {
      disabled:
        format.operations[format.operations.length - 1] === "/" &&
        format.numbers[format.numbers.length - 1] === "",
    }),

    new CalculateUnit(".", {
      func: (display) => display + ".",
      disabled:
        String(format.numbers[format.numbers.length - 1]).indexOf(".") !== -1,
    }),

    new CalculateUnit("=", {
      func: (display) => String(eval(display)),
      callback: format.update,
      disabled: !isNaN(+display) || isNaN(+display[display.length - 1]),
    }),
  ];
};
export default GetCalculateUnits;
