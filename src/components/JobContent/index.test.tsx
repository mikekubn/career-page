import { render, screen, within } from '@testing-library/react';
import JobContent from '.';

const mock = {
  id: '1', image: '/test.jpeg', cover: '/test-cover.png', companyName: 'UnitTest', date: 'from: 11.2020', where: 'where: Mock, Unit Republic', position: 'Test Devr', description: ['React, Next, Nuxt, MSW, Cypress', 'JavaScript, TypeScript', 'Media service development (IPTV, Flashscore)', 'Introduction of QA process Cypress'],
};

describe('Job content', () => {
  it('render job content', () => {
    render(<JobContent data={mock} />);

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
});
