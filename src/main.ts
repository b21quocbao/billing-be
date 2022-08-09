import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  //Swagger
  const swagConfig = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Billing' + ' API')
    .setDescription('Billing' + ' Backend API')
    .setVersion('1.0')
    .addTag('Billing')
    .build();

  const document = SwaggerModule.createDocument(app, swagConfig);
  SwaggerModule.setup('/docs', app, document, {
    customSiteTitle: 'Billing',
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
