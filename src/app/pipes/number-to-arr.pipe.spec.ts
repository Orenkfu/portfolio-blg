import { NumberToArrPipe } from './number-to-arr.pipe';

describe('NumberToArrPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberToArrPipe();
    expect(pipe).toBeTruthy();
  });
});
