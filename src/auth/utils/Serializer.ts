import { PassportSerializer } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { User } from 'src/typeorm/entities/User';

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService
    ) {
        super();
    }

    // serializeUser method is use for serializing the user into the session, whenever the user is logged in
    serializeUser(user: User, done: Function) {
        console.log("Serialize User");
        done(null, user);
    }

    // deserializeUser method is use for restoring the session, it takes the session and figures out who the session belongs to, by searching the user in the database
    async deserializeUser(payload: any, done: Function) {
        const user = await this.authService.findOne(payload.id);
        console.log("Deserialize User");
        return user ? done(null, user) : done(null, null);
    }
}