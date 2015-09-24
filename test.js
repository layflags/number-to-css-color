import test from 'tape'
import convert from './src/number-to-css-color'

test('it converts to 6 digits CSS hex color', (t) => {
  t.equal(convert(0xf), '#00000f')
  t.equal(convert(0), '#000000')
  t.end()
})

test('it converts to 8 digits CSS hex color', (t) => {
  t.equal(convert(0xf, {alpha: true}), '#0000000f')
  t.equal(convert(0x10f, {alpha: true}), '#0000010f')
  t.end()
})

test('it throws an error when number is not an integer', (t) => {
  t.throws(() => convert(0.2), /expecting integer/)
  t.throws(() => convert(), /expecting integer/)
  t.throws(() => convert('1'), /expecting integer/)
  t.end()
})

