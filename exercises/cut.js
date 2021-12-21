'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
const cutFirst = (chaine) =>{
    let supr = chaine.substring(2, chaine.length);
    return supr;
}
const cutLast = (chaine) =>{
    let supr = chaine.substring(0,  chaine.length-2);
    return supr;
}
const cutFirstLast = (chaine) =>{
    let a = cutFirst(chaine);
    let b = cutLast(a)
    return b;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual( cutFirst.length, 1)
assert.strictEqual( cutLast.length, 1)
assert.strictEqual( cutFirstLast.length, 1)
assert.strictEqual( cutFirst('Salutmoi') , 'lutmoi')
assert.strictEqual( cutLast ('Salutmoi') , 'Salutm')
assert.strictEqual( cutFirstLast('Salutmoi') , 'lutm')
// End of tests */
