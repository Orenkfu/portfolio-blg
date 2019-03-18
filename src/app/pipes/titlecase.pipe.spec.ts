import { TitlecasePipe } from './titlecase.pipe';

describe('TitlecasePipe', () => {
  it('create an instance', () => {
    const pipe = new TitlecasePipe();
    expect(pipe).toBeTruthy();
    expect(pipe.toTitleCase('asdfasdf')).toBe('Asdfasdf');
  });
});
