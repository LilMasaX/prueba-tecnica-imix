import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Pipes globales: validación automática en DTOs
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Configuración Swagger
  const config = new DocumentBuilder()
    .setTitle('Document Manager API')
    .setDescription('API skeleton para prueba técnica — Document Manager')
    .setVersion('0.1')
    .addBearerAuth() // Para simular JWT en headers
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`App corriendo en http://localhost:${port}/api`);
}
bootstrap();
