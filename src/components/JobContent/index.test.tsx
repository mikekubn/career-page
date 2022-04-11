import { render, screen, within } from '@testing-library/react';
import JobContent from '.';

const mock = {
  id: '1', image: '/test.jpeg', companyName: 'UnitTest', date: 'from: 11.2020', where: 'where: Mock, Unit Republic', position: 'Test Devr', description: ['React, Next, Nuxt, MSW, Cypress', 'JavaScript, TypeScript', 'Media service development (IPTV, Flashscore)', 'Introduction of QA process Cypress'],
};

describe('Job content', () => {
  it('render job content without modal', () => {
    render(<JobContent data={mock} truncate modal={false} />);

    const card = screen.getByTestId('card');
    const companyName = screen.getByTestId('company-name');
    const date = screen.getByTestId('date');
    const where = screen.getByTestId('where');
    const position = screen.getByTestId('position');
    const description = screen.getByTestId('description');

    expect(card).toHaveClass('justify-start');
    expect(card).not.toHaveProperty('modal-true');

    expect(screen.getByTestId('image')).toBeInTheDocument();

    expect(companyName).toHaveClass('text-lg');
    expect(companyName).toHaveTextContent(mock.companyName);

    expect(date).toHaveClass('text-sm');
    expect(date).toHaveTextContent(mock.date);

    expect(where).toHaveClass('text-sm');
    expect(where).toHaveTextContent(mock.where);

    expect(position).toHaveClass('text-lg');
    expect(position).toHaveTextContent(mock.position);

    expect(description).toHaveClass('text-base truncate');
    expect(description).toHaveTextContent(mock.description.join(', '));
  });

  it('render job content with modal', () => {
    render(<JobContent data={mock} truncate={false} modal />);

    const modal = screen.getByTestId('modal');
    const companyName = screen.getByTestId('modal-company-name');
    const date = screen.getByTestId('modal-date');
    const where = screen.getByTestId('modal-where');
    const position = screen.getByTestId('modal-position');
    const list = screen.getByRole('list', { name: /position/i });
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');

    expect(modal).toHaveClass('justify-center sm:justify-center md:justify-end lg:justify-end');
    expect(modal).not.toHaveProperty('modal-false');

    expect(screen.getByTestId('image')).toBeInTheDocument();

    expect(companyName).toHaveClass('lg:text-3xl');
    expect(companyName).toHaveTextContent(mock.companyName);

    expect(date).toHaveClass('lg:text-lg');
    expect(date).toHaveTextContent(mock.date);

    expect(where).toHaveClass('lg:text-lg');
    expect(where).toHaveTextContent(mock.where);

    expect(position).toHaveClass('lg:text-2xl');
    expect(position).toHaveTextContent(mock.position);

    expect(list).toHaveClass('list-disc leading-6 lg:text-base lg:leading-9');

    const description = items.map((item) => item.textContent);
    expect(description).toEqual(mock.description);
  });
});
