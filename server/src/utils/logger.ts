import { createLogger, transports, format } from 'winston'

export const logger = createLogger({
  transports: [
    new transports.File({
      filename: 'app.logs.log',
      level: 'silly',
      format: format.combine(
        format.errors({ stack: true }),
        format.timestamp(),
        format.json()
      ),
    }),
    new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.colorize({ all: true }),
        format.label({
          label: 'SERVER',
        }),
        format.printf(
          (log: any): string =>
            `[${log.label}] | ${log.timestamp} [${log.level}]: ${log.message}`
        )
      ),
    }),
  ],
})
