import { Module } from '@nestjs/common';
import { EncryptionService } from './encryption.service';
import { EncryptionController } from './encryption.controller';
import {UsersService} from "../users/users.service";
import {UsersModule} from "../users/users.module";

@Module({
  providers: [EncryptionService],
  exports: [EncryptionService],
  controllers: [EncryptionController],
  imports: [UsersModule]
})
export class EncryptionModule {}
