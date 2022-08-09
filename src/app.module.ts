import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Billing, BillingSchema } from './schemas/billing.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    MongooseModule.forFeatureAsync([
      {
        name: Billing.name,
        useFactory: () => {
          const schema = BillingSchema;
          schema.pre<Billing>('save', function (next) {
            this.updatedAt = new Date();
            next();
          });
          return schema;
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
