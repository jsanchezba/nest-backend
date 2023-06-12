import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { User, UserEntity } from './entities/user.entity'

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserEntity }])],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}
