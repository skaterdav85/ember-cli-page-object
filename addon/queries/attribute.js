import { findElementWithAssert, map } from '../helpers';

/**
 * Returns the value of an attribute from the matched element,
 * or an array of values from multiple matched elements.
 *
 * @example
 * // <input placeholder="a value">
 *
 * const page = PageObject.create({
 *   inputPlaceholder: PageObject.attribute('placeholder', 'input')
 * });
 *
 * assert.equal(page.inputPlaceholder, 'a value');
 *
 * @example
 *
 * // <input placeholder="a value">
 * // <input placeholder="other value">
 *
 * const page = PageObject.create({
 *   inputPlaceholders: PageObject.attribute('placeholder', ':input', { multiple: true })
 * });
 *
 * assert.deepEqual(page.inputPlaceholders, ['a value', 'other value']);
 *
 * @example
 *
 * // <div><input></div>
 * // <div class="scope"><input placeholder="a value"></div>
 * // <div><input></div>
 *
 * const page = PageObject.create({
 *   inputPlaceholder: PageObject.attribute('placeholder', ':input', { scope: '.scope' })
 * });
 *
 * assert.equal(page.inputPlaceholder, 'a value');
 *
 * @example
 *
 * // <div><input></div>
 * // <div class="scope"><input placeholder="a value"></div>
 * // <div><input></div>
 *
 * const page = PageObject.create({
 *   scope: 'scope',
 *   inputPlaceholder: PageObject.attribute('placeholder', ':input')
 * });
 *
 * assert.equal(page.inputPlaceholder, 'a value');
 *
 * @public
 *
 * @param {string} attributeName - Name of the attribute to get
 * @param {string} selector - CSS selector of the element to check
 * @param {Object} options - Additional options
 * @param {string} options.scope - Nests provided scope within parent's scope
 * @param {boolean} options.resetScope - Override parent's scope
 * @param {number} options.at - Reduce the set of matched elements to the one at the specified index
 * @param {boolean} options.multiple - If set, the function will return an array of values
 * @param {String} options.testContainer - Context where to search elements in the DOM
 * @return {Descriptor}
 *
 * @throws Will throw an error if no element matches selector
 * @throws Will throw an error if multiple elements are matched by selector and multiple option is not set
 */
export function attribute(attributeName, selector, options = {}) {
  return {
    isDescriptor: true,

    get() {
      var elements = findElementWithAssert(this, selector, options);
      var result;

      result = map(elements, function(element) {
        return element.attr(attributeName);
      });

      return options.multiple ? result : result[0];
    }
  };
}
