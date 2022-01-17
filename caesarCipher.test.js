const caesarCipher = require('./caesarCipher');

test('caesarCipher is working correctly', () => {
    expect(caesarCipher("hello world", 3)).toBe('khoor zruog');
})

test('text wraps from Z to A', () => {
    expect(caesarCipher("a zany and wild night with Caesar", 8)).toBe('i hivg ivl eqtl vqopb eqbp kimaiz');
})

test('punctuation is handled properly', () => {
    expect(caesarCipher("Hello. World, hello ;)", 14)).toBe('vszzc. kcfzr, vszzc ;)');
})