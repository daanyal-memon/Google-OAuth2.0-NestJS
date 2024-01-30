
import { Injectable } from '@nestjs/common';
import { UserDetails } from 'src/utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/typeorm/entities/User';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) { }

    async validateUser(details: UserDetails) {
        console.log('AuthService');
        console.log(details);
        const user = await this.userRepository.findOneBy({ email: details.email });
        console.log("user: ", user);
        if (user) return user;
        console.log("User not found. Creating...", user);
        const newUser = this.userRepository.create(details);
        return this.userRepository.save(newUser);
    }

    async findOne(userId: number) {
        const user = await this.userRepository.findOneBy({ id: userId });
        return user;
    }
}