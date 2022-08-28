import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import EmojiResultsRow from '../EmojiResultRow';

describe('EmojiResultsRow Component', () => {
    it('should be copy emoji correctly', () => {
        render(<EmojiResultsRow title='Joy Cat' symbol="😹" />);
        const clipboardText = screen.getByTestId('component-emoji-result-row');

        expect(clipboardText).toHaveAttribute('data-clipboard-text', '😹');
    })
})