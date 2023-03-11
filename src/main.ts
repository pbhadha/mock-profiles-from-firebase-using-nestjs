import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const mockService = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Service for Mock Profiles")
    .setDescription("Get and set mock profiles")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(mockService, config);
  SwaggerModule.setup('api', mockService, document);

  await mockService.listen(3000);
}
bootstrap();