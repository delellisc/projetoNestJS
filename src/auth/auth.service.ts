import { Injectable, UnauthorizedException } from '@nestjs/common';
import { StaffService } from '../staff/staff.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private staffService: StaffService,
        private jwtService: JwtService
    ){}

    async signIn(username: string, pass: string): Promise<{ access_token: string }> {
        const staff = await this.staffService.findOne(username);
        if (staff?.password !== pass){
            throw new UnauthorizedException();
        }
        const payload = { sub: staff.userId, username: staff.username };
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
}

/* @Injectable()
export class AuthService {
    constructor(private staffService: StaffService){}

    async signIn(username: string, pass: string): Promise<any> {
        const staff = await this.staffService.findOne(username);
        if (staff?.password !== pass){
            throw new UnauthorizedException();
        }
        const { password, ...result } = staff;
        return result;
    }
}
 */