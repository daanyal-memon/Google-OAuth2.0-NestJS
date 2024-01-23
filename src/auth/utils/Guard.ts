// Guards allows you to protect certain end points in your applications
// This guard is designed for authenticating users using the Google OAuth 2.0 strategy

import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";   // It's a base class for creating custom authentication guards

@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {  // The string 'google' represents the strategy name
    async canActivate(context: ExecutionContext) {
        const activate = (await super.canActivate(context)) as boolean; // It represents whether the authentication should be activated
        const request = context.switchToHttp().getRequest();    // gets the HTTP request object from the execution context
        await super.logIn(request); // logs in the user by invoking the logIn method of the base class, passing the HTTP request
        return activate;    // indicating whether the authentication should proceed
    }
}