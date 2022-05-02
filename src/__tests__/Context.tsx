import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppContextProvider } from '../Context'

describe('Context', () => {
  it('should render the context with default values', () => {
    render(
      <AppContextProvider>
        <div>content</div>
      </AppContextProvider>
    );
    expect(screen.getByText(/content/)).toHaveTextContent('content');
  });
});