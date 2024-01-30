import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { GoogleAuthGuard } from './utils/Guard';

@Controller('auth')
export class AuthController {

    @Get('google/login')
    @UseGuards(GoogleAuthGuard) // check what happens when you remove this guard!
    handleLogin() {
        return { msg: 'Google Authentication' };
    }

    @Get('google/redirect')
    @UseGuards(GoogleAuthGuard) // check what happens when you remove this guard!
    handleRedirect() {
        return { msg: 'OK' };
    }

    @Get('status')
    user(@Req() request: Request) {
        console.log(request.user);
        if (request.user) {
            return { msg: 'Authenticated' };
        } else {
            return { msg: 'Not Authenticated' };
        }
    }
}
