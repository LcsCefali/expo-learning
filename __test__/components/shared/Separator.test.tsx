import React from 'react';

import { render } from '@testing-library/react-native';

import Separator from '~/components/shared/Separator';

describe('Separator Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Separator />);
    expect(getByTestId('separator')).toBeTruthy();
  });

  it('applies correct styles', () => {
    const { getByTestId } = render(<Separator />);
    const separator = getByTestId('separator');
    expect(separator.props.style).toEqual(expect.objectContaining({ height: 8, width: '100%' }));
  });
});
