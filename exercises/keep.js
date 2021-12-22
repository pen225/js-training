'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
const keepFirst = (chaine) =>{
    return chaine.substring(0,2);
}
const keepLast = (chaine) =>{
    return chaine.substring(chaine.length,  chaine.length-2);
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(typeof keepLast, 'function')

// End of tests */
