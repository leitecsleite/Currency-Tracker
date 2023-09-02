import React from 'react';
import { render } from '@testing-library/react';
import Banner from '@/components/Banner/index'

describe('Banner component', () => {
  it('renders without errors', () => {
    const { getByAltText } = render(<Banner />);
    const bannerImage = getByAltText('Banner principal');
    expect(bannerImage).toBeInTheDocument();
  });
});