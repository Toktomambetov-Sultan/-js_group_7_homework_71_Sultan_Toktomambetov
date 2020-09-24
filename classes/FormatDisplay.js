class FormatDisplay {
  constructor(display) {
    this.display = display;
    this.operations = [];
    this.numbers = [""];
    Array.from(this.display).forEach((char) => {
      if ("1234567890.".indexOf(char) + 1) {
        this.numbers[this.numbers.length - 1] += char;
      } else {
        this.numbers.push("");
        this.operations.push(char);
      }
    });
  }
  update=()=> {
    this.numbers = [""];
    this.operations = [];
  }
  get() {
    return (
      this.operations.reduce(
        (acc, item, index) => acc + this.numbers[index] + item,
        "",
      ) + this.numbers[this.numbers.length - 1]
    );
  }
}
export default FormatDisplay;
