import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { sum, product } from './exercises16.js';

describe('sum', () => {
    it('should return 0 on empty array', () => {
        assert.equal(sum([]), 0);
    });
    it.skip('should return single element of array of length 1', () => {
        assert.equal(sum([8]), 8);
    });
    it.skip('should return sum of two elements', () => {
        assert.equal(sum([7, 8]), 15);
    });
    it.skip('should return sum of three elements', () => {
        assert.equal(sum([7, -2, 8]), 13);
    });
});

describe('product', () => {
    it.skip('should return 1 on empty array', () => {
        assert.equal(product([]), 1);
    });
    it.skip('should return single element of array of length 1', () => {
        assert.equal(product([8]), 8);
    });
    it.skip('should return product of two elements', () => {
        assert.equal(product([7, 8]), 56);
    });
    it.skip('should return product of three elements', () => {
        assert.equal(product([7, -2, 8]), -112);
    });
});
