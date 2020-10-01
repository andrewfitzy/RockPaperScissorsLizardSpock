import winston from 'winston';
import properties from './properties';

const logger = winston.createLogger({
  level: properties.logLevel,
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

export {
  properties,
  logger,
};
