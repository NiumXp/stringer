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
   * @param {Array<Array<(RegExp | string), string>>} replacers
   * @returns {UpString}
   */
  replaceArray(replacers) {
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
