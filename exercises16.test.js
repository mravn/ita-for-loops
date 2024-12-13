import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { sum, product } from './exercises16.js';

describe('sum', () => {
    it('should return 0 on empty array', () => {
        assertSame(sum([]), 0);
    });
    it.skip('should return single element of array of length 1', () => {
        assertSame(sum([8]), 8);
    });
    it.skip('should return sum of two elements', () => {
        assertSame(sum([7, 8]), 15);
    });
    it.skip('should return sum of three elements', () => {
        assertSame(sum([7, -2, 8]), 13);
    });
});

describe('product', () => {
    it.skip('should return 1 on empty array', () => {
        assertSame(product([]), 1);
    });
    it.skip('should return single element of array of length 1', () => {
        assertSame(product([8]), 8);
    });
    it.skip('should return product of two elements', () => {
        assertSame(product([7, 8]), 56);
    });
    it.skip('should return product of three elements', () => {
        assertSame(product([7, -2, 8]), -112);
    });
});

function assertSame(actual, expected) {
    assert.deepStrictEqual(actual, expected);
}
