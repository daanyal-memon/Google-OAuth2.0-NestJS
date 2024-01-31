import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-google-oauth20";
import { AuthService } from "../auth.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService
    ) {
        super({
            clientID: 'GOOGLE_CLIENT_ID',   // don't just put your clientId or any information like this rather use env variables for safety purposes
            clientSecret: 'GOOGLE_CLIENT_SCRET',
            callbackURL: 'http://www.example.com/auth/google/callback',
            scope: ['profile', 'email'] // the scope is what we need of the client
        });
    }

    // This method is going to be invoked when the users have successfully authenticated themselves
    /* It take 3 parameters:
        1. accessToken: sttring
        2. refreshToken: string
        3. profile: it would be the bundle of information that we asked for such as name, email, profile picture, etc...
        */
    async validate(accessToken: string, refreshToken: string, profile: Profile) {
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
        const user = await this.authService.validateUser({ displayName: profile.displayName, email: profile.emails[0].value })
        console.log("Validate");
        console.log(user);
        return user || null;
    }
}