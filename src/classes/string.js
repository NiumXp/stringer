export default function LoadString() {
  /**
   * @param {boolean} lower
   * @example
   * console.log("hello!".toFirstUpperCase()); // Hello!
   * @returns {string}
   */
  String.prototype.toFirstUpperCase = function toFirstUpperCase(lower) {
    return this.slice(0, 1).toUpperCase() + (lower ? this.toLowerCase() : this).slice(1);
  };

  /**
   * @param {Array<RegExp | string>} replacers
   * @example
   * const text = "hello, world!".replaceArray(
   *   ['o', 'a'],
   *   ['l', 'c']
   * );
   *
   * console.log(text); // hecca, warcd!
   * @returns {string}
   */
  String.prototype.replaceArray = function replaceArray(...replacers) {
    let text = this;

    // eslint-disable-next-line no-restricted-syntax, prefer-const
    for (let [find, replacer] of replacers) {
      if (!(find instanceof RegExp)) find = new RegExp(find, 'g');

      text = text.replace(find, replacer);
    }

    return text;
  };

  /**
   * @param {string} left
   * @param {string | object} right
   * @returns {string}
   */
  String.prototype.wrap = function wrap(left, right = undefined) {
    if (this.isNullOrEmpty(left) && this.isNullOrEmpty(right)) return this;

    if (typeof (right) === 'object' && Boolean(right.asHTMLTag)) {
      return `<${left}>${this}</${left.split(' ')[0]}>`;
    }

    if (!this.isNullOrEmpty(left) && typeof (right) === 'string' && !this.isNullOrEmpty(right)) {
      return left + this + right;
    }

    if (!this.isNullOrEmpty(left) && right === undefined) {
      return left + this + left;
    }

    if (!this.isNullOrEmpty(left) && this.isNullOrEmpty(right)) {
      return left + this;
    }

    if (this.isNullOrEmpty(left) && !this.isNullOrEmpty(right)) {
      return this + right;
    }

    return this;
  };

  /**
   * @param {string} string
   * @param {boolean} useDefaultString
   * @returns {boolean}
   */
  String.prototype.isNullOrEmpty = function isNullOrEmpty(string, useDefaultString = false) {
    // eslint-disable-next-line no-param-reassign
    if (!string && useDefaultString) string = this;

    return (string === null || string === undefined || string === '');
  };

  return String;
}
