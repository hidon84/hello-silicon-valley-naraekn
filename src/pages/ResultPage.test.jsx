import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import ResultPage from './ResultPage';

import RESULTS from '../../fixtures/results';

test('ResultPage', () => {
  useSelector.mockImplementation((selector) => selector({
    result: RESULTS[0],
  }));

  const { getByText } = render((
    <MemoryRouter>
      <ResultPage />
    </MemoryRouter>
  ));

  expect(getByText(/결과/)).not.toBeNull();
});
