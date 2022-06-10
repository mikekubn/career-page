import { render, screen } from '@testing-library/react';
import { IParamsProps } from 'src/pages';
import JobContent from '.';

const mock: IParamsProps['posts'][0] = {
  filename: 'test',
  frontmatter: {
    id: 1,
    image: 'test.png',
    cover: 'test-cover.png',
    title: 'UnitTest',
    to: '12/2000',
    from: '02/2005',
    where: 'Mock, Unit Republic',
    position: 'Test',
    description: ['Media', 'Cypress'],
  },
};

describe('Job content', () => {
  it('render job content', () => {
    render(<JobContent data={mock} />);

    const card = screen.getByTestId('job-content');
    const companyName = screen.getByTestId('company-name');
    const date = screen.getByTestId('date-from');
    const where = screen.getByTestId('where');
    const position = screen.getByTestId('position');
    const description = screen.getByTestId('description');

    expect(card).toHaveClass('inline-block w-full p-3');
    expect(card).not.toHaveProperty('modal-true');

    expect(screen.getByTestId('image')).toBeInTheDocument();

    expect(companyName).toHaveClass('text-lg');
    expect(companyName).toHaveTextContent(mock.frontmatter.title);

    expect(date).toHaveClass('text-sm');
    expect(date).toHaveTextContent(mock.frontmatter.from);

    expect(where).toHaveClass('text-sm');
    expect(where).toHaveTextContent(mock.frontmatter.where);

    expect(position).toHaveClass('text-lg');
    expect(position).toHaveTextContent(mock.frontmatter.position);

    expect(description).toHaveClass('text-base truncate');
    mock.frontmatter.description.map((item) => {
      expect(description).toHaveTextContent(item);
    });
  });
});
