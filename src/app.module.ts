import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';
import { StaffModule } from './staff/staff.module';

@Module({
  imports: [ClientModule, AuthModule, StaffModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
