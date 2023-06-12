import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { HydratedDocument, Types } from 'mongoose'

export type UserDocument = HydratedDocument<User>

@Schema({
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
})
export class User {
    @ApiProperty({ type: String })
    id: Types.ObjectId
    @ApiProperty({ type: String })
    @Prop({ required: true })
    name: string
    @ApiProperty({ type: String })
    @Prop({ required: true })
    password: string
    @ApiProperty({ type: String })
    @Prop({ required: true })
    email: string
    @ApiProperty({ type: String, deprecated: true })
    @Prop()
    gender: string
}

export const UserEntity = SchemaFactory.createForClass(User)
