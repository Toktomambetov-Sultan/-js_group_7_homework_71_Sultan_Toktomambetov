const add = (display, txt = "") => {
  return display + txt;
};
class CalculateUnit {
  constructor(char, { disabled, func, callback } = { disabled: false }) {
    this.char = char;
    this.func = (display) => {
      callback ? callback() : null;
      if (isNaN(+this.char)) {
        return func(display);
      } else {
        return display + this.char;
      }
    };
    this.disabled = disabled;
  }

  get() {
    return this.char;
  }
}
export default CalculateUnit;
