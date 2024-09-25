import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';

import Button from '~/components/shared/Button';

describe('Button Component', () => {
  it('renders correctly with given title', () => {
    const { getByTestId } = render(<Button title='Click Me' />);
    expect(getByTestId('button')).toBeTruthy();
  });

  it('applies rounded-full style when roundedFull is true', () => {
    const { getByTestId } = render(<Button title='Click Me' roundedFull />);
    const button = getByTestId('button');

    expect(button.props.style).toEqual(expect.objectContaining({ borderRadius: 9999 }));
  });

  it('does not apply rounded-full style when roundedFull is false', () => {
    const { getByTestId } = render(<Button title='Click Me' />);
    const button = getByTestId('button').parent!;
    expect(button.props.style).not.toEqual(expect.objectContaining({ borderRadius: 9999 }));
    expect(button.props.style).toEqual(expect.objectContaining({ borderRadius: 3 }));
  });

  it('calls onPress when button is pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<Button title='Click Me' onPress={onPressMock} />);
    fireEvent.press(getByTestId('button'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
