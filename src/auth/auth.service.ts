import { Injectable, UnauthorizedException } from '@nestjs/common'
import { compare } from 'bcrypt'
import { UsersService } from 'src/users/users.service'
import { JwtService } from '@nestjs/jwt'
// import { Logger } from '@nestjs/common'

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async validateUser(username: string, password: string) {
        const user = await this.usersService.findOne({
            $or: [{ name: username }, { email: username }],
        })

        if (!user) return null

        const isValid = await compare(password, user.password)
        if (isValid) {
            return { id: user.id, name: user.name }
        }

        return null
    }

    async signIn(user: any) {
        const payload = { id: user.id, name: user.name }
        return {
            access_token: this.jwtService.sign(payload),
        }
    }

    // async signUp(data: CreateAuthDto) {
    //     return 'This action adds a new auth'
    // }
}
