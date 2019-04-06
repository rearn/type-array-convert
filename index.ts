const uint8toUint32Nocheck = (data: Uint8Array): Uint32Array => {
  const out = new Uint32Array(data.length / 4);

  let off: number = 0;
  for (let i: number = 0; i < out.length; i += 1) {
    const res = (data[0 + off] << 24) |
                (data[1 + off] << 16) |
                (data[2 + off] << 8) |
                 data[3 + off];
    out[i] = res >>> 0;
    off += 4;
  }

  return out;
};

const uint8toUint16Nocheck = (data: Uint8Array): Uint16Array => {
  const out = new Uint16Array(data.length / 2);

  let off: number = 0;
  for (let i: number = 0; i < out.length; i += 1) {
    const res = (data[0 + off] << 8) |
                 data[1 + off];
    out[i] = res >>> 0;
    off += 2;
  }

  return out;
};

const uint16toUint32Nocheck = (data: Uint16Array): Uint32Array => {
  const out = new Uint32Array(data.length / 2);

  let off: number = 0;
  for (let i: number = 0; i < out.length; i += 1) {
    const res = (data[0 + off] << 16) |
                 data[1 + off];
    out[i] = res >>> 0;
    off += 2;
  }

  return out;
};

export const uint8toUint32ZeroPadding = (data: Uint8Array): Uint32Array => {
  const mod: number = data.length % 4;
  if (mod !== 0) {
    const data2: Uint8Array = new Uint8Array(data.length - mod + 4);
    data2.set(data, 4 - mod);    
    return uint8toUint32Nocheck(data2);
  }

  return uint8toUint32Nocheck(data);
};

export const uint8toUint16ZeroPadding = (data: Uint8Array): Uint16Array => {
  const mod: number = data.length % 2;
  if (mod !== 0) {
    const data2: Uint8Array = new Uint8Array(data.length - mod + 2);
    data2.set(data, 2 - mod);
    return uint8toUint16Nocheck(data2);
  }

  return uint8toUint16Nocheck(data);
};

export const uint16toUint32ZeroPadding = (data: Uint16Array): Uint32Array => {
  const mod: number = data.length % 2;
  if (mod !== 0) {
    const data2: Uint16Array = new Uint16Array(data.length - mod + 2);
    data2.set(data, 2 - mod);
    return uint16toUint32Nocheck(data2);
  }

  return uint16toUint32Nocheck(data);
};

export const uint8toUint32 = (data: Uint8Array): Uint32Array => {
  if (data.length % 4 !== 0) {
    throw new Error('Input array length cannot divisible by 4.');
  }

  return uint8toUint32Nocheck(data);
};

export const uint8toUint16 = (data: Uint8Array): Uint16Array => {
  if (data.length % 2 !== 0) {
    throw new Error('Input array length cannot divisible by 2.');
  }

  return uint8toUint16Nocheck(data);
};

export const uint16toUint32 = (data: Uint16Array): Uint32Array => {
  if (data.length % 2 !== 0) {
    throw new Error('Input array length cannot divisible by 2.');
  }

  return uint16toUint32Nocheck(data);
};

export const uint16toUint8 = (data: Uint16Array): Uint8Array => {
  const out = new Uint8Array(data.length * 2);

  let off: number = 0;
  for (let i: number = 0; i < data.length; i += 1) {
    out[0 + off] = data[i] >>> 8;
    out[1 + off] = data[i] & 0xff;
    off += 2;
  }

  return out;
};

export const uint32toUint16 = (data: Uint32Array): Uint16Array => {
  const out = new Uint16Array(data.length * 2);

  let off: number = 0;
  for (let i: number = 0; i < data.length; i += 1) {
    out[0 + off] = data[i] >>> 16;
    out[1 + off] = data[i] & 0xffff;
    off += 2;
  }

  return out;
};

export const uint32toUint8 = (data: Uint32Array): Uint8Array => {
  const out: Uint8Array = new Uint8Array(data.length * 4);

  let off: number = 0;
  for (let i: number = 0; i < data.length; i += 1) {
    out[0 + off] = data[i] >>> 24;
    out[1 + off] = (data[i] >>> 16) & 0xff;
    out[2 + off] = (data[i] >>> 8) & 0xff;
    out[3 + off] = data[i] & 0xff;
    off += 4;
  }

  return out;
};
