// example helper
/**
 * Ensures a value for a given attribute exists.
 * The number 0 and boolean false are considered valid values.
 * Throws an error if value is missing.
 *
 * Say you reference a partial like this:
 * ```
 * {{>some-partial name="David" }}
 * ```
 * In the markup for some-partial you might have:
 * ```
 * <h2>Hello, {{required name}}!</h2>
 * ```
 */
Handlebars.registerHelper('required', function (val, options) {
  if (!val && val !== 0 && val !== false) {
    throw new Error(`Missing required attribute. helper::${options.name}`);
  } else {
    return val;
  }
});
