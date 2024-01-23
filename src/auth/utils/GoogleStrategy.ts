import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-google-oauth20";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            clientID: '826098680555-5qh8ntf71g3a1gie30f4pi9ugsk2akgm.apps.googleusercontent.com',   // don't just put your clientId or any information like this rather use env variables for safety purposes
            clientSecret: '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',
            callbackURL: 'http://localhost:3001/api/auth/google/redirect',
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
    }
}