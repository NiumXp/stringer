export default class UpString extends String {
  /**
   * @param {boolean} lower
   * @example
   * const text = new UpString("hello!");
   *
   * console.log(text.toFirstUpperCase()); // Hello!
   * @returns {string}
   */
  toFirstUpperCase(lower) {
    return this[0].toUpperCase() + (lower ? this.toLowerCase() : this).slice(1);
  }
}
