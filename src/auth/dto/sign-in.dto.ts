import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty } from 'class-validator'

export class SignInDto {
    @ApiProperty({ type: String, required: true })
    @IsEmail()
    public username: string

    @ApiProperty({ type: String, required: true })
    @IsNotEmpty()
    public password: string
}
