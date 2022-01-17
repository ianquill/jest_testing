const capitalize = require('./capitalize');

test('capitalizes first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
});