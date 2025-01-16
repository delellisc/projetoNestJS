import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
    
    @PrimaryGeneratedColumn()
    idClient: number;
    
    @Column({ length: 150 })
    name:string;

    @Column({ length: 20 })
    cpf:string;

    @Column({ length: 50 })
    email: string;

    @Column()
    dateofBirth: Date;
    
    @Column({ length: 100 })
    login: string;

    @Column({ length: 255 })
    password: string;
}