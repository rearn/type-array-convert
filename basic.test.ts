import * as tac from './index';

test('uint32toUint8', () => {
  expect(tac.uint32toUint8(new Uint32Array([0x12345678])))
    .toMatchObject(new Uint8Array([0x12, 0x34, 0x56, 0x78]));
});

test('uint32toUint16', () => {
  expect(tac.uint32toUint16(new Uint32Array([0x12345678])))
    .toMatchObject(new Uint16Array([0x1234, 0x5678]));
});

test('uint16toUint8', () => {
  expect(tac.uint16toUint8(new Uint16Array([0x1234])))
    .toMatchObject(new Uint8Array([0x12, 0x34]));
});

test('uint16toUint32 ok', () => {
  expect(tac.uint16toUint32(new Uint16Array([0x1234, 0x5678])))
    .toMatchObject(new Uint32Array([0x12345678]));
});

test('uint8toUint16 ok', () => {
  expect(tac.uint8toUint16(new Uint8Array([0x12, 0x34])))
    .toMatchObject(new Uint16Array([0x1234]));
});

test('uint8toUint32 ok', () => {
  expect(tac.uint8toUint32(new Uint8Array([0x12, 0x34, 0x56, 0x78])))
    .toMatchObject(new Uint32Array([0x12345678]));
});

test('uint16toUint32 failed', () => {
  expect(() => {
    tac.uint16toUint32(new Uint16Array([0x1234, 0x5678, 0x9abc]))
  }).toThrowError();
});

test('uint8toUint16 failed', () => {
  expect(() => {
    tac.uint8toUint16(new Uint8Array([0x12, 0x34, 0x56]))
  }).toThrowError();
});

test('uint8toUint32 failed', () => {
  expect(() => {
    tac.uint8toUint32(new Uint8Array([0x12, 0x34, 0x56, 0x78, 0x9a]))
  }).toThrowError();
});

test('uint16toUint32ZeroPadding ok', () => {
  expect(tac.uint16toUint32ZeroPadding(new Uint16Array([0x1234, 0x5678])))
    .toMatchObject(new Uint32Array([0x12345678]));
});

test('uint8toUint16ZeroPadding ok', () => {
  expect(tac.uint8toUint16ZeroPadding(new Uint8Array([0x12, 0x34])))
    .toMatchObject(new Uint16Array([0x1234]));
});

test('uint8toUint32ZeroPadding ok', () => {
  expect(tac.uint8toUint32ZeroPadding(new Uint8Array([0x12, 0x34, 0x56, 0x78])))
    .toMatchObject(new Uint32Array([0x12345678]));
});

test('uint16toUint32ZeroPadding pedding', () => {
  expect(tac.uint16toUint32ZeroPadding(new Uint16Array([0x1234, 0x5678, 0x9abc])))
    .toMatchObject(new Uint32Array([0x00001234, 0x56789abc]));
});

test('uint8toUint16ZeroPadding pedding', () => {
  expect(tac.uint8toUint16ZeroPadding(new Uint8Array([0x12, 0x34, 0x56])))
    .toMatchObject(new Uint16Array([0x0012, 0x3456]));
});

test('uint8toUint32ZeroPadding pedding', () => {
  expect(tac.uint8toUint32ZeroPadding(new Uint8Array([0x12, 0x34, 0x56, 0x78, 0x9a])))
    .toMatchObject(new Uint32Array([0x00000012, 0x3456789a]));
});