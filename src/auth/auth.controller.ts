import { Controller, Get, UseGuards } from '@nestjs/common';
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
}
