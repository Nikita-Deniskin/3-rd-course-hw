const { it, expect } = require("@jest/globals");
const { getCardsArray } = require("./components/utils");

  it('should return an array of cards with the same length as the specified difficulty', () => {
    const difficulty = 10;
    const result = getCardsArray(difficulty);
    expect(result.length).toBe(difficulty);
  });

  it('should return an array with duplicated cards', () => {
    const difficulty = 10;
    const result = getCardsArray(difficulty);
    const uniqueCards = new Set(result);
    expect(uniqueCards.size).toBe(difficulty / 2);
  });

  it('should return an array with shuffled cards', () => {
    const difficulty = 10;
    const result1 = getCardsArray(difficulty);
    const result2 = getCardsArray(difficulty);

    expect(result1).not.toEqual(result2);
  });

