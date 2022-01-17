const calculator = require('./calculator');

test('calculator adds successfully', () => {
    expect(calculator.add(1, 1)).toBe(2);
});

test('calculator adds decimals successfully', () => {
    expect(calculator.add(1.8, 1.2)).toBe(3);
})

test('calculator subtracts successfully', () => {
    expect(calculator.subtract(9, 7)).toBe(2);
})

test('calculator divides successfully', () => {
    expect(calculator.divide(8, 4)).toBe(2);
})

test('calculator multiplies successfully', () => {
    expect(calculator.multiply(3, 12)).toBe(36);
})