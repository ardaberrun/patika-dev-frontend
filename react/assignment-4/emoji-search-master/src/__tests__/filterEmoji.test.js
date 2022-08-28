import filterEmoji from '../filterEmoji';

it('should be return an array of emoji', () => {
  const filteredEmoji = filterEmoji('', 20);

  expect(filteredEmoji.length).toBe(20);
});

it('should be return array that contains search text inside title', () => {
  const mockEmojiList = [
    {
      "title": "Skull",
      "symbol": "💀",
      "keywords": "dead halloween"
    },
    {
      "title": "Skull and Crossbones",
      "symbol": "💀",
      "keywords": "dead halloween"
    },
    {
      "title": "Kissing Cat",
      "symbol": "😽",
      "keywords": "kissing cat face with closed eyes cat cat animal animal"
    },
  ]
  const filteredEmoji = filterEmoji('skull', 20, mockEmojiList);
  
  for(let i = 0; i < filteredEmoji.length; i++) {
    expect(filteredEmoji[i].title).toContain('Skull');
  }
});

it('should be return array that contains search text inside keywords', () => {
  const mockEmojiList = [
    {
      "title": "dadda",
      "symbol": "💀",
      "keywords": "skull dead halloween"
    },
    {
      "title": "dlkdadas",
      "symbol": "💀",
      "keywords": "dead halloween skull"
    },
    {
      "title": "Kissing Cat",
      "symbol": "😽",
      "keywords": "kissing cat face with closed eyes cat cat animal animal"
    },
  ]
  const filteredEmoji = filterEmoji('skull', 20, mockEmojiList);
  
  for(let i = 0; i < filteredEmoji.length; i++) {
    expect(filteredEmoji[i].keywords).toContain('skull');
  }
});
