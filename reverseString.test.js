const reverseString = require('./reverseString');

test('successfully reverses string', () => {
    expect(reverseString('hello')).toBe('olleh');
})