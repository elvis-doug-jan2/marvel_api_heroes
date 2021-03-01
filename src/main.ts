import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  app.setGlobalPrefix(process.env.GLOBAL_PREFIX)

  const options = new DocumentBuilder()
    .setTitle('Marvel Herores API')
    .setDescription('Marvel Heroes documentation')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.PORT)
}

bootstrap()
