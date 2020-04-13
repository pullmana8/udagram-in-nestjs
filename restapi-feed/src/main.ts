import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  // app.enableCors() did not work, had to move cors: true on the previous line
  // await sequelize.addModels()
  await app.listen(3000);
}
bootstrap();
