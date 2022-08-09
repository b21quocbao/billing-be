import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BillingDocument = Billing & Document;

@Schema()
export class Billing {
  @Prop({ unique: true })
  userName: string;

  @Prop()
  callCount: number;

  @Prop()
  blockCount: number;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export const BillingSchema = SchemaFactory.createForClass(Billing);
