'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
const yell = (chaine) =>{
    return chaine.toUpperCase();
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell('str'), 'STR')
assert.strictEqual(yell('zapZAP'), 'ZAPZAP')
// End of tests */
