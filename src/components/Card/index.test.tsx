import { render, screen } from '@testing-library/react';
import Card from './index';

it('card', () => {
  render(<Card><div>Foo</div></Card>);
});
