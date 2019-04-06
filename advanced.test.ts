import * as tac from './index';

const u32array: Uint32Array = new Uint32Array(64);
const u16array: Uint16Array = new Uint16Array(64);
const u8array: Uint8Array = new Uint8Array(64);

u32array.map((): number => {
  return Math.floor(Math.random() * 0x100000000);
});
u16array.map((): number => {
  return Math.floor(Math.random() * 0x10000);
});
u8array.map((): number => {
  return Math.floor(Math.random() * 0x100);
});

test('uint32toUint8toUint32', () => {
  expect(tac.uint8toUint32(tac.uint32toUint8(u32array)))
    .toMatchObject(u32array);
});

test('uint32toUint16toUint32', () => {
  expect(tac.uint16toUint32(tac.uint32toUint16(u32array)))
    .toMatchObject(u32array);
});

test('uint16toUint8toUint16', () => {
  expect(tac.uint8toUint16(tac.uint16toUint8(u16array)))
    .toMatchObject(u16array);
});

test('uint16toUint32toUint16', () => {
  expect(tac.uint32toUint16(tac.uint16toUint32(u16array)))
    .toMatchObject(u16array);
});

test('uint8toUint16toUint8', () => {
  expect(tac.uint16toUint8(tac.uint8toUint16(u8array)))
    .toMatchObject(u8array);
});

test('uint8toUint32 ok', () => {
  expect(tac.uint32toUint8(tac.uint8toUint32(u8array)))
    .toMatchObject(u8array);
});
