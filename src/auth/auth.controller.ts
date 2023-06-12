import {
    Controller,
    Post,
    Request,
    HttpCode,
    HttpStatus,
    UseGuards,
} from '@nestjs/common'
import {
    ApiBadRequestResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger'
import { AuthService } from './auth.service'
// import { SignInDto } from './dto/sign-in.dto'
import { LocalAuthGuard } from './guards/local-auth.guard'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    // @Post('signup')
    // signup(@Body() createAuthDto: CreateAuthDto) {
    //     return this.authService.signIn(createAuthDto)
    // }

    @Post('signin')
    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ description: 'Accepted authentication' })
    @ApiUnauthorizedResponse({ description: 'Invalid credentials exception' })
    @ApiBadRequestResponse()
    signIn(@Request() request: any) {
        return this.authService.signIn(request.user)
    }
}
