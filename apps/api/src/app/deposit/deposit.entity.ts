import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DepositDocument = HydratedDocument<Deposit>;

@Schema()
export class Deposit {
  @Prop()
  currency: string;

  @Prop()
  amount: number;

  @Prop()
  date: string;

  @Prop()
  category: DepositCategory;
}

export const DepositSchema = SchemaFactory.createForClass(Deposit);

export enum DepositCategory {
  CRYPTO = 'crypto',
}
