import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import EmojiResults from '../EmojiResults';

describe('EmojiResults Component', () => {
    it('should be render correctly', () => {
        const mockEmojiData = [
            {
                title: 'Joy Cat',
                symbol: '😹',
                keywords: 'dasdadsda'
            },
            {
                title: 'Joy Cat',
                symbol: '😹',
                keywords: 'dasdadsda'
            },
            {
                title: 'Joy Cat',
                symbol: '😹',
                keywords: 'dasdadsda'
            }
        ];
        render(<EmojiResults  emojiData={mockEmojiData} />);     
        const emojies = screen.queryAllByTestId('component-emoji-result-row');

        expect(emojies).toHaveLength(3);
    });
})