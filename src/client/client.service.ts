import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientService {

  constructor(
    @Inject('CLIENT_REPOSITORY')
    private clientRepository: Repository<Client>,
  ) {}

  create(createClientDto: CreateClientDto) {
    const client = this.clientRepository.create(createClientDto); // Cria a entidade do cliente
    return this.clientRepository.save(client);
  }

  async findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
