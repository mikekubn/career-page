import { createdAt, firstLetterToUpperCase, getPaths, getPost, getPosts, sanitation, sortByDate, urlPathnameSanity } from './utils';

describe('Utils tests', () => {
  it('get paths', () => {
    const paths = getPaths('src/_mock_posts');

    expect(paths).toEqual(['mock']);
  });

  it('sanitation', () => {
    const items = sanitation(['a.md', 'b.md'], '.md');

    expect(items).toEqual(['a', 'b']);
  });

  it('get post', () => {
    const dir = 'src/_mock_posts/mock.md';
    const post = getPost(dir);

    expect(post).toEqual({
      slug: 'mock',
      frontmatter: { id: 3, title: 'Mock', where: 'Testing' },
      content: '',
    });
  });

  it('get posts', () => {
    const posts = getPosts('src/_mock_posts');

    expect(posts).toEqual([
      {
        slug: 'mock',
        frontmatter: { id: 3, title: 'Mock', where: 'Testing' },
        content: '',
      },
    ]);
  });

  it('first letter toUpperCase', () => {
    const str = firstLetterToUpperCase('test');

    expect(str).toEqual('Test');
  });

  it('url pathname sanity', () => {
    const str = urlPathnameSanity('/test-url-blog/');

    expect(str).toEqual('test url blog');
  });

  it('sort by date', () => {
    const mock: { title: string; date: string }[] = [
      {
        title: 'date1',
        date: '2005-06-23',
      },
      {
        title: 'date2',
        date: '2020-08-23',
      },
    ];
    const date = mock.sort((a, b) => sortByDate(a.date, b.date));

    expect(date).toEqual([
      { title: 'date2', date: '2020-08-23' },
      { title: 'date1', date: '2005-06-23' },
    ]);
  });

  it('created at', () => {
    const date1 = createdAt('2022-07-24T00:00:00.000Z');
    const date2 = createdAt('2022-07-24');
    const date3 = createdAt('2022-07');

    expect(date1).toEqual('24. 7. 2022');
    expect(date2).toEqual('24. 7. 2022');
    expect(date3).toEqual('1. 7. 2022');
  });
});
