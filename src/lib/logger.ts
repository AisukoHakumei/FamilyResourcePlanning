import { createLogger, format, transports } from 'winston';
import { browser } from '$app/environment';

const { combine, timestamp, printf, colorize } = format;

const consoleFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        consoleFormat
    ),
    transports: [],
});

if (browser) {
    logger.add(new transports.Console({
        format: combine(
            colorize(),
            consoleFormat
        ),
    }));


} else {
    logger.add(new transports.Console({
        format: combine(
            colorize(),
            consoleFormat
        ),
    }));

    if (process.env.NODE_ENV === 'production') {
        logger.add(new transports.File({ filename: 'logs/error.log', level: 'error' }));
        logger.add(new transports.File({ filename: 'logs/combined.log' }));
    }
}

export default logger;