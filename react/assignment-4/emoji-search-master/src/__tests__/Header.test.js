import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
    it('should be render correctly', () => {
        render(<Header />);
        const header = screen.getByText('Emoji Search');

        expect(header).toBeInTheDocument();
    })
})