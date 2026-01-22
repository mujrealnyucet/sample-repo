export const quakeInvSqrt = n => ((b) => ((f, i) => (f[0] = n, i[0] = 0x5f3759df - (i[0] >> 1), f[0] * (1.5 - (0.5 * n * f[0] * f[0]))))(new Float32Array(b), new Int32Array(b)))(new ArrayBuffer(4));
