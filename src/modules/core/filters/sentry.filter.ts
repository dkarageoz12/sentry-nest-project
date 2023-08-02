import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import * as Sentry from '@sentry/node';

@Catch()
export class SentryFilter extends BaseExceptionFilter {

  public catch(exception: unknown, host: ArgumentsHost) {
    Sentry.captureException(exception);

    super.catch(exception, host);
  }
}