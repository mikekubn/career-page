import { render } from '@testing-library/react';
import { IArticle } from 'src/pages/blog';
import BaseArticle from '.';

const mock: IArticle = {
  filename: 'url-post',
  content: 'content',
  frontmatter: {
    author: 'author',
    date: '07-22-3030',
    tags: ['a', 'b', 'c'],
    title: 'title',
    excerpt: 'excerpt',
  },
};

describe('Article', () => {
  it('display article', () => {
    const { getByText, getByTestId } = render(<BaseArticle article={mock} />);

    const title = getByText('title');
    const author = getByText('author');
    const excerpt = getByText('excerpt');
    const date = getByTestId('time');

    expect(title.textContent).toEqual(mock.frontmatter.title);
    expect(author.textContent).toEqual(mock.frontmatter.author);
    expect(date.textContent).toEqual('22. 7. 3030');
    expect(excerpt.textContent).toEqual(mock.frontmatter.excerpt);
  });
});
