import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from './entities/user.entity'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    create(createUserDto: CreateUserDto) {
        return 'This action adds a new user'
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find()
    }

    findById(id: string): Promise<User> {
        return this.userModel.findById(id)
    }

    async findOne(filter: any): Promise<User> {
        return this.userModel.findOne(filter)
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`
    }

    remove(id: number) {
        return `This action removes a #${id} user`
    }
}
