export default class UpString extends String {
  /**
   * @param {boolean} lower
   * @example
   * console.log(new UpString("hello!").toFirstUpperCase());
   *  // Hello!
   * @returns
   */
  toFirstUpperCase(lower) {
    return this[0].toUpperCase() + (lower ? this.toLowerCase() : this).slice(1);
  }
}
