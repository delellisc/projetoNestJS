import { Injectable } from '@nestjs/common';

export type Staff = any;

@Injectable()
export class StaffService {
    private readonly staff = [
        {
            userId: 1,
            username: 'naruto',
            password: 'cabecadevento' 
        },
        {
            userId: 2,
            username: 'sasuke',
            password: 'vinganca'
        }
    ];

    async findOne(username: string): Promise<Staff | undefined> {
        return this.staff.find(user => user.username === username);
    }
}
