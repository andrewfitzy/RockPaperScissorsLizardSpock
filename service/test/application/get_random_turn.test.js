import randomTurn from '../../src/application/get_random_turn';

describe('get_random_turn', () => {
  it('should generate a random turn', () => {
    // Given

    // When
    const turn = randomTurn();

    // Then
    expect(turn).toBeDefined();
  });
});
