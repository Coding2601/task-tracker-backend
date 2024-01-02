import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Authenticate extends Document {
  static email(
    email: any,
  ): (
    target: typeof import('../jwt.strategy').JwtStrategy,
    propertyKey: undefined,
    parameterIndex: 0,
  ) => void {
    throw new Error('Method not implemented.');
  }
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop()
  tasks: Array<JSON>;
}

export const Auth = SchemaFactory.createForClass(Authenticate);
