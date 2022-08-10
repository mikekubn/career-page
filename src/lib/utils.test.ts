import { firstLetterToUpperCase, getPaths, getPost, getPosts, sanitation, urlPathnameSanity } from './utils';

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

    expect(post.frontmatter).toEqual({
      id: 3,
      title: 'Mock',
      where: 'Testing',
    });
  });

  it('get posts', () => {
    const posts = getPosts('src/_mock_posts');

    expect(posts).toEqual([
      {
        filename: 'mock',
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
});
