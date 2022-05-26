import { getPaths, sanitation } from './utils';

describe('Utils tests', () => {
  it('get paths', () => {
    const paths = getPaths('src/_posts');

    expect(paths).toEqual(['livesporttv', 'onsemiconductor', 'siemens', 'webscope']);
  });

  it('sanitation', () => {
    const items = sanitation(['a.md', 'b.md'], '.md');

    expect(items).toEqual(['a', 'b']);
  });
});