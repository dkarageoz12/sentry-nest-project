import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Sentry from '@sentry/node';
import { SentryFilter } from "./modules/core/filters/sentry.filter";

async function bootstrap() {
  Sentry.init({
    dsn: 'https://639e5ffc981341a4b0771a6b25909798@o1019007.ingest.sentry.io/5984887'
  });

  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new SentryFilter(app.getHttpAdapter()));

  await app.listen(3000);
}
bootstrap();
