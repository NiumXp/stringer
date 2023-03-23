export default class UpString extends String {
  /**
   * @param {string} string
   */
  constructor(string) {
    super();

    /**
     * @type {string}
     */
    this.string = string;

    this.toString();
  }

  /**
   * @param {boolean} lower
   * @example
   * const text = new UpString("hello!");
   *
   * console.log(text.toFirstUpperCase().toString()); // Hello!
   * @returns {UpString}
   */
  toFirstUpperCase(lower) {
    this.string = this.string[0].toUpperCase()
      + (lower ? this.string.toLowerCase() : this.string).slice(1);

    return this;
  }

  /**
   * @param {(RegExp | string)[]} replacers
   * @example
   * const text = new UpString("hello, world!").replaceArray(
   *   ['o', 'a'],
   *   ['l', 'c']
   * );
   *
   * console.log(text.toString()); // hecca, warcd!
   * @returns {UpString}
   */
  replaceArray(...replacers) {
    let text = this.string;

    // eslint-disable-next-line no-restricted-syntax, prefer-const
    for (let [find, replacer] of replacers) {
      if (!(find instanceof RegExp)) find = new RegExp(find, 'g');

      text = text.replace(find, replacer);
    }

    this.string = text;

    return this;
  }

  toString() {
    return this.string;
  }

  toJSON() {
    return {
      string: this.string,
    };
  }
}
