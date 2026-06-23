const assert = require('node:assert');
const { describe, it, run } = require('node:test');
const calculateDiscount = require('./calculator');

describe('Калькулятор скидки', () => {
    it('корректный расчет', () => {
        assert.strictEqual(calculateDiscount(1000, 10), 900);
    });
    it('отрицательная цена -> -1', () => {
        assert.strictEqual(calculateDiscount(-100, 10), -1);
    });
    it('скидка >100 -> -1', () => {
        assert.strictEqual(calculateDiscount(1000, 150), -1);
    });
    it('скидка <0 -> -1', () => {
        assert.strictEqual(calculateDiscount(1000, -10), -1);
    });
    it('нечисловые аргументы -> -1', () => {
        assert.strictEqual(calculateDiscount('100', 10), -1);
        assert.strictEqual(calculateDiscount(1000, '10'), -1);
    });
});

if (require.main === module) {
    run().then(() => {
        process.exit(0);
    });
}
