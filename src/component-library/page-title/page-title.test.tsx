import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageTitle from './page-title';

describe('<Pagetitle />', () => {
  test('it should mount', () => {
    render(<PageTitle title="test title"/>);
    
    const pagetitle = screen.getByTestId('Pagetitle');

    expect(pagetitle).toBeInTheDocument();
  });
});