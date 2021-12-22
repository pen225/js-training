'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

const whisper = (chaine) => {
    return chaine.toLowerCase();
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
// assert.strictEqual(capitalize('StS'), 'sts')
// End of tests */
