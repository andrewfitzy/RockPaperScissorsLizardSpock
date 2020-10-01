import { logger } from '../infrastructure/configuration';

const possibleTurns = [
  'ROCK',
  'PAPER',
  'SCISSORS',
  'LIZARD',
  'SPOCK',
];

export default () => {
  logger.debug('Getting random turn');

  const index = Math.floor(Math.random() * possibleTurns.length);

  const turn = possibleTurns[index];

  logger.debug(`Returning random turn ${turn}`);
  return turn;
};
