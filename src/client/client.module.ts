import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ClientProviders } from './client.providers';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
@Module({
  imports: [DatabaseModule],
  controllers:[ClientController],
  providers: [
    ...ClientProviders,
    ClientService,
  ],
})
export class ClientModule {}