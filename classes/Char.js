const add = (display, txt = "") => {
  return display + txt;
};
class CalculateUnit {
  constructor(char, { disabled, func } = { disabled: false }) {
    this.char = char;
    this.display;
    this.func = isNaN(+this.char) ? func : (display) => display + this.char;
    this.disabled = disabled;
  }

  get() {
    return this.char;
  }
}
export default CalculateUnit;
