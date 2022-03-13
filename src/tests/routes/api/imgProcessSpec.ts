//testing api function
import resizeImage from './../../../routes/api/imgProcess';
const h = '500';
const w = '700';
const d = '';
it('should return void and resolve promise', async () => {
  const test: unknown = await resizeImage(d, w, h);
  expect(test).not.toEqual(null);
});
