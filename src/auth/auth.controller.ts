import {
    Body,
    Controller,
    Post,
    HttpCode,
    HttpStatus,
    Get,
    Request,
    UseGuards
} from '@nestjs/common';
import { AuthService } from './auth.service'
import { AuthGuard } from './auth.guard'

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.username, signInDto.password)
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
// curl -X POST http://localhost:3000/auth/login -d '{"username": "naruto", "password": "cabecadevento"}' -H "Content-Type: application/json"
// curl http://localhost:3000/auth/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoibmFydXRvIiwiaWF0IjoxNzM3MTM0MjYwLCJleHAiOjE3MzcxMzQzMjB9.iroTfNSz-Ft1f7rLd0l9w9KckLectZPryl6kg-3Mldw"
