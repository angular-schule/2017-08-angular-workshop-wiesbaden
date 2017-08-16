import { AddOnePipe } from './add-one.pipe';

xdescribe('AddOnePipe', () => {
  it('create an instance', () => {
    const pipe = new AddOnePipe();
    expect(pipe).toBeTruthy();
  });
});
